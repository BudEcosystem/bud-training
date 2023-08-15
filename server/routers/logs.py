from fastapi import APIRouter, Depends, WebSocket
from ..dependencies import validate_token_header
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time
import os
from config import settings

router = APIRouter(
    prefix="/logs",
    tags=["logs"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)

log_file_path = os.path.join(settings.LOG_DIR, 'log_file.txt')


class LogFileHandler(FileSystemEventHandler):
    def __init__(self, websocket: WebSocket):
        self.websocket = websocket
        self.last_position = 0

    async def on_modified(self, event):
        if event.src_path == log_file_path:
            with open(log_file_path, 'r') as file:
                file.seek(self.last_position)
                new_content = file.read()
                self.last_position = file.tell()
                if new_content:
                    await self.websocket.send_text(new_content)


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    event_handler = LogFileHandler(websocket)
    observer = Observer()
    observer.schedule(event_handler, path=log_file_path, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    finally:
        observer.stop()
        observer.join()