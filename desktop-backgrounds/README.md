# Desktop configuration

My configurations is composed by:

* [Xfdesktop][0]: the Xfce's desktop manager;
* [LightDM GTK+ Greeter][1]: a LightDM greeter that uses GTK+.

At every boot a random wallpaper is designed to be the background of both
desktop (Xfdesktop) and the greeter screen (LightDM). At every 30 minutes the
wallpaper is changed.

## background-selector

This script choices a random wallpaper from
`HOME/$XDG_PICTURES_DIR/backgrounds`. The wallpapers must be a **JPG** or
**JPEG** image!

Because it will be run by LightDM as root, the script is placed on
`/usr/local/bin/`.

## Systemd Timers

Systemd is at this point present on most popular GNU/Linux distribution, also in
Debian. It have many functionalities, also a better job scheduler (that replaces
Cron). I use this, instead of Cron, because it is more flexible.

I have a Systemd Timer (`background-selector.timer`) that every 30 minutes
change the wallpaper, it runs `background-selector` as user
(`background-selector.unit`). Because root privileges are not required, I run it
in `--user` mode.

Both `.timer` and `.unit` files must be placed on `$HOME/.config/systemd/user`.
The you must activate the timer:

    systemctl --user start background-selector.timer
    systemctl --user enable background-selector.timer

## Installer script

I wrote a small Bash script that does all things I described in this file:

1. Make symlink of `background-selector` to the right position;
2. Make symlinks of necessary files to activate Systemd Timers;
3. Enable and start the timer.

[0]: https://docs.xfce.org/xfce/xfdesktop/start
[1]: https://launchpad.net/lightdm-gtk-greeter
[2]: https://freedesktop.org/wiki/Software/LightDM/
