# Disable also SC1091, it is a warning for files not checked in Bash 'source'.
shellcheck_opts = --color=always --exclude=SC1091

.PHONY: all lint lint-bash lint-bash-module lint-bash-dotfiles lint-bash-bin

all : lint-bash

# Lint all Bash scripts.
lint-bash: lint-bash-module lint-bash-dotfiles lint-bash-bin

# Lint Bash module.
lint-bash-module:
	shellcheck $(shellcheck_opts) bash/*

# Lint Bash main installer script.
lint-bash-dotfiles:
	shellcheck $(shellcheck_opts) dotfiles

# Lint all custom Bash scripts.
lint-bash-bin:
	shellcheck $(shellcheck_opts) bin/*
