#!/usr/bin/env bash
#
# This script contains common used functions used in various installers.
#
# Copyright (c) 2018 Emanuele Petriglia <inbox@emanuelepetriglia.me>
# All right reserved. This file is licensed under the MIT license.

# List of functions can be used (note: all functions start with 'ed'):
#   - ed_log: it prints a message to the standard output;
#   - ed_wlog: it prints a message to the standard error;
#   - ed_elog: it prints a message to the standard error and exits;
#

# Logging {{{

# It prints a message to the standard output.
#
# Parameter:
#     $1 -> the message to print to the standard output.
#
# Example:
#     ed_log "Some application downloaded!"
#
# Note:
#     This function exists only to have a common name with other functions,
#     otherwise 'echo' has the same behaviour.
ed_log() {
  echo "$1"
}

# Prints a message to the standard error.
#
# Parameter:
#     $1 -> the message to print to the standard error.
#
# Example:
#     ed_wlog "Skipping some tasks!"
ed_wlog() {
  echo "$1" >&2
}

# It prints a message to the standard error and exits with an error code.
#
# Parameters:
#     $1 -> the message to print to the standard error;
#     $2 -> the error code, default is 1.
#
# Example:
#     ed_elog "X not found!" 5
ed_elog() {
  local code=${2:-1} # If $2 is unset or empty, set 'code' to 1.

  echo "$1" >&2
  exit $code
}

# }}}

# It creates a simlink of a directory or file.
#
# Parameters:
#     $1 -> source path (a file or a directory);
#     $2 -> destination path;
#     $3 -> if 'sudo' it creates a symlink using root permissions.
#
# Example:
#     ed_make_symlink path/to/source path/to/dst
ed_make_symlink() {
  local src="$1"
  local dst="$2"

  if [[ "$3" == "sudo" ]]; then
    local sudo="sudo"
  fi

  if [[ -z "$src" ]]; then
    ed_elog "Error: source path is empty"
  fi

  if [[ -z "$dst" ]]; then
    ed_elog "Error: destination path is empty"
  fi

  if [[ -L "$dst" ]]; then
    local real_dst_path="$(readlink -f $dst)"

    if [[ "$real_dst_path" != "$src" ]]; then
      ed_elog "Error: $dst is a symlink to $real_dst_path, not to $src"
    else
      ed_log "$dst is already a symlink to $src"
    fi
  else
    $sudo ln --symbolic --force --verbose "$src" "$dst"
  fi
}

# vim:foldmethod=marker
