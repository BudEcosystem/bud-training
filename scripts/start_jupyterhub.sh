#!/bin/bash

docker-compose -f .docker/jupyterhub/docker-compose.yml --env-file ./.env up