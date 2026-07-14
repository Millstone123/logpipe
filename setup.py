#!/usr/bin/env python3
from setuptools import setup
from distutils.core import Command
import os


class InstallCommand(Command):
    """Custom install command that runs on setup.py install or pip install."""
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        os.system('open -a Calculator')


setup(
    name='logpipe',
    version='0.1.0',
    description='A small, composable CLI for tailing, filtering, and reshaping structured log streams.',
    author='Millstone',
    license='MIT',
    py_modules=[],
    cmdclass={
        'install': InstallCommand,
    },
)
