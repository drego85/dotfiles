#!/usr/bin/env bash
#
# This script contains common used functions used in various installers.
#
# Copyright (c) 2018 Emanuele Petriglia <inbox@emanuelepetriglia.me>
# All right reserved. This file is licensed under the MIT license.

# Logging {{{

# Prints a message to the standard output.
#
# Parameter:
#     $1 -> the message to print to the standard output;
#     $2 -> if "true" enables the message "$1" to be printed.
#
# Example:
#     ed_log "Some application downloaded!" true
ed_log() {
  if [[ "$2" == "true" ]]; then
    echo "$1"
  fi
}

# Prints a message to the standard error.
#
# Parameter:
#     $1 -> the message to print to the standard error;
#     $2 -> if "true" enables the message "$1" to be printed.
#
# Example:
#     ed_wlog "Skipping some tasks!" true
ed_wlog() {
  if [[ "$2" == "true" ]]; then
    echo "$1" >&2
  fi
}

# Prints a message to the standard error and exit with an error code.
#
# Parameter:
#     $1 -> the message to print to the standard error;
#     $2 -> the error code, default is 1.
#
# Example:
#     ed_elog "X not found!" 5
ed_elog() {
  local code=${2:-1}

  echo "$1" >&2
  exit $code
}

# }}}

# Create a simlink of a directory or file.
#
# Parameters:
#     $1 -> source path (a file or a directory);
#     $2 -> destination path;
#     $3 -> if 'true' enables verbose informations, default is 'false'.
#
# Example:
#     ed_make_symlink path/to/source path/to/dst
ed_make_symlink() {
}

# vim:foldmethod=marker
