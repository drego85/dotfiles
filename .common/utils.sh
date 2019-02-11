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

# Check if a given program (the command) exists. If it doesn't
# exist, it prints an error message and exits.
#
# Parameters:
#     $1 -> the command to check.
#
# Example:
#     ed_exists "curl"
ed_exists() {
  local command_to_check="$1"

  if [[ -z "$command_to_check" ]]; then
     ed_elog "ed_exists: no given command to check."
  fi

  if [[ -z "$(command -v $command_to_check)" ]]; then
    ed_elog "Error: $command_to_check is not installed on the system."
  fi
}

# Check if a given directory exists, if it doesn't exist it will create
# the path with the directory.
#
# At the end of this function the path is certainly created.
#
# Parameters:
#	$1 -> directory to check and create;
#	$2 -> if "sudo" it creates the directory with root permissions.
ed_make_dir() {
  if [[ -z "$1" ]]; then
    ed_elog "ed_make_dir: no given directory to create."
  else
    local directory="$1"
  fi

  if [[ "$2" == "sudo" ]]; then
    local sudo="sudo"
  fi

  # $directory may exist but it is not necessary a directory.
  if [[ -e "$directory" ]]; then
    if [[ ! -d "$directory" ]]; then
      ed_elog "Error: ed_make_dir: \"$directory\" already exists and it is not a directory"
    fi
  else
    if [[ "$sudo" ]]; then
      ed_wlog "root required to create directory \"$directory\""
    fi

    $sudo mkdir --parents --verbose "$directory"
  fi
}

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
    if [[ "$sudo" ]]; then
      ed_wlog "root required to create symlink \"$src\" -> \"$dst\""
    fi

    $sudo ln --symbolic --force --verbose "$src" "$dst"
  fi
}

# vim:foldmethod=marker
