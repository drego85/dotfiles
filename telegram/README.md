# Telegram

I use [Telegram Desktop][0] as my main client on my computer.

Telegram Desktop is not in Fedora official repositories, but it can be found
on RPM Fusion. So it is necessary first to install this repository, and then
install Telegram Desktop.

If you don't want to do a manual installation, I created a small script file
`install`, that requires my custom Bash library for the dotfiles.

## Installation

First you need to add RPM Fusion:

    sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

Then you can simply install `telegram-desktop`

    sudo dnf install telegram-desktop

Start chatting!

## Automatic installation

Run `install` script.

[0]: https://desktop.telegram.org/
