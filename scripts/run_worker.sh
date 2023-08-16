#!/bin/bash

#celery -A workers.celery_worker.celery_app worker --concurrency=1 -Ofair --loglevel=debug  -P gevent -E --logfile=logs/celery.log
sudo systemctl restart celery.service