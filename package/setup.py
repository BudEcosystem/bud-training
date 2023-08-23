from setuptools import setup, find_packages

VERSION = "0.0.1"
DESCRIPTION = "Bud-MLOps client"
LONG_DESCRIPTION = "Client library for the Bud-MLOps service"

# Setting up
setup(
    # the name must match the folder name 'verysimplemodule'
    name="bud_mlops",
    version=VERSION,
    author="Adarsh M S",
    author_email="adarsh@",
    description=DESCRIPTION,
    long_description=LONG_DESCRIPTION,
    packages=find_packages(),
    install_requires=["requests", "tqdm"],  # add any additional packages that
    # needs to be installed along with your package. Eg: 'caer'
    keywords=[
        "python",
    ],
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: POSIX :: Linux",
    ],
)
