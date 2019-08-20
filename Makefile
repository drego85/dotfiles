.PHONY: all lint

all : lint

# Find all Bash script and lint them, but exclude 'test.sh', that is a Bash
# script of a git submodule.
# Disable also SC1091, it is a warning for files not checked in Bash 'source'.
lint :
	find . -not -name "test.sh" -and -name "*.sh" -or -name "install" -or -name "dotfiles" -exec shellcheck --color=always --exclude=SC1091 {} \;
