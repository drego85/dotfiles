# VLC

I use VLC as music and video player on my computer.

VLC is not in Fedora official repositories, but it can be found on RPM Fusion.
So it is necessary first to install this repository, and then install VLC.

If you don't want to do a manual installation, I created a small script file
`install`, that requires my custom Bash library for the dotfiles.

## Installation

First you need to add RPM Fusion:

    sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

Then you can simply install `telegram-desktop`

    sudo dnf install vlc

## Automatic installation

Run `install` script.
