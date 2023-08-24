# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

# Configuration file for JupyterHub
import os

c = get_config()  # noqa: F821

# We rely on environment variables to configure JupyterHub so that we
# avoid having to rebuild the JupyterHub container every time we change a
# configuration parameter.

# Spawn single-user servers as Docker containers
c.JupyterHub.spawner_class = "dockerspawner.DockerSpawner"

# Set timeout for container spawning
c.DockerSpawner.http_timeout = 120

# Spawn containers from this image
c.DockerSpawner.image = os.environ["DOCKER_NOTEBOOK_IMAGE"]
c.DockerSpawner.port = int(os.environ.get("DOCKER_NOTEBOOK_PORT", 8888))

# JupyterHub requires a single-user instance of the Notebook server, so we
# default to using the `start-singleuser.sh` script included in the
# jupyter/docker-stacks *-notebook images as the Docker run command when
# spawning containers.  Optionally, you can override the Docker run command
# using the DOCKER_SPAWN_CMD environment variable.
spawn_cmd = os.environ.get("DOCKER_SPAWN_CMD", "start-singleuser.sh")
c.DockerSpawner.cmd = spawn_cmd

# Connect containers to this Docker network
network_name = os.environ["DOCKER_NETWORK_NAME"]
c.DockerSpawner.use_internal_ip = True
c.DockerSpawner.network_name = network_name

# Explicitly set notebook directory because we'll be mounting a volume to it.
# Most `jupyter/docker-stacks` *-notebook images run the Notebook server as
# user `jovyan`, and set the notebook directory to `/home/jovyan/work`.
# We follow the same convention.
NB_USER = os.environ.get("DOCKER_NOTEBOOK_USER", "bud")
notebook_dir = os.environ.get("DOCKER_NOTEBOOK_DIR", "~/content/notebooks").replace(
    "~/", f"/home/{NB_USER}/"
)
c.DockerSpawner.notebook_dir = notebook_dir

# Mount the real user's Docker volume on the host to the notebook user's
# notebook directory in the container
c.DockerSpawner.volumes = {"jupyterhub-user-{username}": notebook_dir}

# Remove containers once they are stopped
c.DockerSpawner.remove = True

# For debugging arguments passed to spawned containers
c.DockerSpawner.debug = True

# Start the container as root
c.DockerSpawner.extra_create_kwargs = {
    "user": "root",
    # "workdir": f"/home/{NB_USER}/",
}  # Can also be an integer UID

# Env variables to be passed to the container
c.DockerSpawner.environment = {
    "NB_USER": NB_USER,
    "HOME": f"/home/{NB_USER}/",
    "GRANT_SUDO": "yes",
    "CHOWN_HOME": "yes",
    "CHOWN_HOME_OPTS": "-R",
    # "DOCKER_STACKS_JUPYTER_CMD": "notebook",
}

# Extra arguments to be passed to the single-user server
c.DockerSpawner.args = [
    "--NotebookApp.terminals_enabled=False",
    "--NotebookApp.default_url=/notebooks/Untitled.ipynb",
]

# Set the default url of the user container to
c.DockerSpawner.default_url = "/notebooks"

# Specify which URL prefix should be routed to the Hub. Disable or change this to '/' for hub UI access
# c.JupyterHub.hub_routespec = "/hub/api"
# c.Proxy.extra_routes = {"/": os.environ["REDIRECT_API_BASE_URL"].strip("/")}

# User containers will access hub by container name on the Docker network
c.JupyterHub.hub_ip = "jupyterhub"
c.JupyterHub.hub_port = 8080

# Persist hub data on volume mounted inside container
c.JupyterHub.cookie_secret_file = "/data/jupyterhub_cookie_secret"
c.JupyterHub.db_url = "sqlite:////data/jupyterhub.sqlite"

# Authenticate users with Native Authenticator
c.JupyterHub.authenticator_class = "nativeauthenticator.NativeAuthenticator"

# Allow anyone to sign-up without approval
c.NativeAuthenticator.open_signup = True

# Allowed admins
admin = os.environ.get("JUPYTERHUB_ADMIN")
if admin:
    c.Authenticator.admin_users = [admin]

# Auth token configuration
c.JupyterHub.services = [
    {
        "name": "service-admin",
        "api_token": os.environ["JUPYTERHUB_API_TOKEN"],
    },
]

# Role configuration
c.JupyterHub.load_roles = [
    {
        "name": "service-api",
        "scopes": [
            # specify the permissions the token should have
            "admin:users",
            "admin:servers",
            "access:servers",
        ],
        "services": [
            # assign the service the above permissions
            "service-admin",
        ],
    }
]

# Start multiple named servers for a single user
c.JupyterHub.allow_named_servers = True
