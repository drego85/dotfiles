# Pragha

It is my music player. I use it because it is preinstalled on Fedora 29 Xfce.

## Install configuration

Pragha uses `~/.config/pragha/config` file to store and retrieve values. This
file is overwritten every time an option is changed from Pragha GUI. So a
symbolic link is not possible. You can have a basic start up configuration
copying my file to Pragha config:

    $ cp config ~/.config/pragha/config

## Installer

The installer simply copy that file to the right destination.
