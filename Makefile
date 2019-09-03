#!/usr/bin/make -f
#
# This is my Makefile to lint all scripts in my repository. To run this
# makefile type `make all` or `make lint`. You can also lint a specific script.
#
# Using `-j N` option you can run N jobs simultaneously.
#
# This makefile requires 'ShellCheck' to lint Bash script and 'flake8' to lint
# Python scripts.
#
# Copyright (c) 2019 Emanuele Petriglia <inbox@emanuelepetriglia.com>
# All rights reserved. This file is licensed under the MIT license.

# Disable also SC1091, it is a warning for files not checked in Bash 'source'.
# Shellcheck reads this environment variable automatically.
shellcheck_opts = --color=always --exclude=SC1091

flake8_opts = --max-line-length=80

# Get only the files that are written in Bash.
bash_scripts = $(shell grep -rl -e "^\#!/usr/bin/env bash")

# Get only the files that are written in Python 3.
python_scripts = $(shell grep -rl bin/* -e "^\#!/usr/bin/env python3")

.PHONY: all lint $(bash_scripts) $(python_scripts)

all : lint

lint : $(bash_scripts) $(python_scripts)

$(bash_scripts) :
	shellcheck $(shellcheck_opts) $@

$(python_scripts) :
	flake8 $(flake8_opts) $@
