# ema-pe dotfiles

## What they are

This repository contains some dotfiles, scripts and configurations that I use
everyday.

## Requirements

My dotfiles are distro-agnostic, but `dotfiles` script is written specifically
to work with Fedora. Custom scripts under `bin` are written to work with any
computer with Bash, also the configuration files of several programs.

## Install

My dotfiles are organized as modules. Every module is a small Bash script that
can do many things, usually they:

* Install software (via `dnf`);
* Install configuration files;
* Activate something (like services).

For a list of available modules run `dotfiles list`. Some modules have a
reserved folder, which contains some configuration files.

## Modules

### tlp

TLP is an useful package to manage power and extends battery life. It works well
with other power management software (like `xfce4-powermanager`).

The package can be found via Fedora official repository with the name `tlp`.

The default configuration file, located on `/etc/default/tlp` is good, but I've
done some customization (I'm using a Thinkpad laptop).

The basic commands available are:

* Start tlp: `sudo tlp start` (but there is also a unit file for systemd);
* Check the configuration: `sudo tlp stat`;
* Manage WiFi and Blueooth: `wifi [on/off]` and `bluetooth [on/off]`.

This module will install tlp, copy my configuration, start tlp and enable the
unit file (for systemd).

### dotfiles

This module installs the `dotfiles` script to `~/.local/bin` folder. It is
supposed that this path is added previously to `PATH` environment variable.

### clean

This module simply removes via `dnf` all preinstalled Fedora packaged that I
don't use. For a list of these packages, open the script and go to the `clean`
module.

### gpg

I use GnuPG to manager my PGP keys. GnuPG have also an agent called
`gpg-agent`, I use it also for SSH support. There is some configuration because
out-of-the-box Fedora uses `ssh-agent` and `gnome-keyring`.

The GnuPG file configuration is located at `~/.gnupg/gpg.conf`, the agent
configuration is located at `~/.gnupg/gpg-agent.conf`. This module installs
them.

There is a default daemon enabled of `gpg-agent`, but I prefer to manage the
daemon with `systemd --user`. Luckyly GnuPG comes with default files for
systemd, but they are not enabled. This module enables them.

The module also enables `gpg-agent` for SSH support. It is necessary to
specify the environment variable `SSH_AUTH_SOCK` to point to `gpg-agent`
socket. This line is already added in my custom `.bashrc` file:

    export SSH_AUTH_SOCK="/run/user/$(id -u)/gnupg/S.gpg-agent.ssh"

I use Xfce as desktop environment. There is only one problem: it autostarts
`ssh-agent`. I don't want it, so I kill it every time Xfce is started. This
line is already added in my custom `.bash_profile` file:

    pkill ssh-agent

This module also installs `pinentry-gtk`, because I don't like the default
installed that uses ncurses.

### lightdm

[LightDM][1] is a desktop manager easy to use, flexible and lightweight. I use
it simply because it is preinstalled with Fedora Xfce spin.

I prefer an autologin method because the disk is encrypted and the computer have
only one user. I do not want to type two password when I boot the computer, and
the second is useless because if someone find the disk password he can grab the
data without problems. A display manager is also useless in my case because I
have only one user, but I keep it to have a "modern" desktop.

**DO NOT LOCK THE SCREEN**. If you lock the screen and go back to the greeter,
it crashes. I don't know why.

More informations can be found on [LightDM's home page][1] and on the [Arch
Linux's wiki][2].

## License

Every script is licensed under the [MIT License][0].


[0]: LICENSE
[1]: www.freedesktop.org/wiki/Software/LightDM
[2]: https://wiki.archlinux.org/index.php/LightDM
[3]: https://github.com/spanezz/lightdm-autologin-greeter
