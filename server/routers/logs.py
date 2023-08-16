from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from ..dependencies import validate_token_header
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time
import os
from config import settings
import asyncio
from threading import Thread

router = APIRouter(
    prefix="/logs",
    tags=["logs"],
    responses={404: {"description": "Not found"}},
)

log_file_path = os.path.join(settings.LOG_DIR, 'log_file.txt')


class LogFileHandler(FileSystemEventHandler):
    def __init__(self, websocket: WebSocket, file_path: str):
        self.websocket = websocket
        self.file_path = file_path
        self.last_position = 0

    def on_modified(self, event):
        with open(self.file_path, 'r') as file:
            file.seek(self.last_position)
            new_content = file.read()
            self.last_position = file.tell()
            if new_content:
                asyncio.run_coroutine_threadsafe(self.websocket.send_text(new_content), loop)


@router.websocket("/ws/{file_path:path}")
async def websocket_endpoint(websocket: WebSocket,  file_path: str):
    global loop
    loop = asyncio.get_running_loop()

    await websocket.accept()
    dest_path = os.path.join(settings.LOG_DIR, file_path)
    event_handler = LogFileHandler(websocket, dest_path)
    observer = Observer()
    observer.schedule(event_handler, path=dest_path, recursive=False)
    observer_thread = Thread(target=observer.start)
    observer_thread.start()

    try:
        while True:
            try:
                # Try to receive a message with a timeout, just to see if the connection is still open
                await websocket.receive_text()
            except WebSocketDisconnect:
                break # If an exception is caught, break the loop to close the connection
            time.sleep(1)
    finally:
        observer.stop()
        observer_thread.join()




