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

### bash

This modules simply link my bash configuration, that consists of a `bashrc` and
`bash_profile` file. It contains essential environment variables, aliases and
small scripts.

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

### xfwm4

This module installs my custom theme for Xfwm4. The theme has small borders and
it is really minimal. I've also set up a Gitlab repository for my theme, see
[here][4].

### firefox

I use Mozilla Firefox as my main browser. I like it because is privacy focused,
fast and work really well in Linux. It is a big and complex software, it is not
easy to customize it.

#### Manual installation process

Unfortunately Firefox needs to be customized from GUI instead on CLI, so there
is not a real installer script. The steps to do are:

1. From an active Firefox session, create a new profile with name
   `default-release` (default profile that comes with Fedora). You can access to
   the page via `about:profiles`.
2. Switch to the new profile and delete the old one (if you want).
3. Login to Firefox Sync (or download all extentions you want).
4. Customize Firefox GUI.
5. To set custom `user.js`, run my installer script.

#### Extentions

Extentions can't be installed from command line, so you need to install them
manually (or use [Firefox Sync][5]). I use these extentions:

* **CanvasBlocker**: prevent Canvas fingerprinting; [[FA]][6] [[Sources]][7]
* **CSS Exfil Protection**: prevent CSS Exfil attacks; [[FA]][8] [[Sources]][9]
* **Decentraleyes**: local emulation of CDN; [[FA]][10] [[Sources]][11]
* **HTTPS Everywhere**: force HTTPS on sites; [[FA]][12] [[Sources]][13]
* **Tridactyl**: VIM keybindings on Firefox; [[FA]][14] [[Sources]][15]
* **uBlock Origin**: general blocker; [[FA]][16] [[Sources]][17]
* **Neat URL**: remove garbage from URLs; [[FA]][20] [[Sources]][21]
* **Containerise**: automatically open websites in a container; [[FA]][22] [[Sources]][23]
* **Add custom search engine**: add cutom search engine. [[FA]][24] [[Sources]][24]

All these extentions are automatically updated via Firefox, so you only need to
download them the first time.

#### Custom user.js

The `user.js` file is a file with all options to customize Firefox behaviour.
Many options can be selected from the graphical interface, but lots are hidden.

I use [ghacks' `user.js`][18], an `user.js` enhanced for privacy. I don't like
some options, so I have also a custom [`user.js`][19] that overrides some
options.

This module will download the latest version of ghacks' `user.js` and move that
file to the Firefox profile with suffix `default-release`. At the end it append
my custom options to `user.js` file on the profile.

## License

Every script is licensed under the [MIT License][0].


[0]: LICENSE
[1]: www.freedesktop.org/wiki/Software/LightDM
[2]: https://wiki.archlinux.org/index.php/LightDM
[3]: https://github.com/spanezz/lightdm-autologin-greeter
[4]: https://gitlab.com/ema-pe/backup-thinble-xfwm4-theme
[5]: https://www.mozilla.org/en-US/firefox/features/sync/
[6]: https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/
[7]: https://github.com/kkapsner/CanvasBlocker
[8]: https://addons.mozilla.org/en-US/firefox/addon/css-exfil-protection/
[9]: https://github.com/mlgualtieri/CSS-Exfil-Protection
[10]: https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/
[11]: https://git.synz.io/Synzvato/decentraleyes
[12]: https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/
[13]: https://github.com/EFForg/https-everywhere
[14]: https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/
[15]: https://github.com/cmcaine/tridactyl
[16]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
[17]: https://github.com/gorhill/uBlock
[18]: https://github.com/ghacksuserjs/ghacks-user.js
[19]: firefox/user.js
[20]: https://addons.mozilla.org/en-US/firefox/addon/neat-url/
[21]: https://github.com/Smile4ever/Neat-URL
[22]: https://addons.mozilla.org/en-US/firefox/addon/containerise/
[23]: https://github.com/kintesh/containerise
[24]: https://addons.mozilla.org/en-US/firefox/addon/add-custom-search-engine/
[25]: https://github.com/evilpie/add-custom-search-engine
