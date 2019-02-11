# LightDM

[LightDM][0] is a desktop manager easy to use, flexible and lightweight. I use
it simply because it is preinstalled with Fedora Xfce spin, but I also used it
Debian Xfce.

## LightDM configuration

I use [`lightdm-autologin-greeter`][2], a simple greeter. I prefer an autologin
method because the disk is encrypted and the computer have only one user. I do
not want to type two password when I boot the computer, and the second is
useless because if someone find the disk password he can grab the data without
problems. A display manager is also useless in my case because I have only one
user, but I keep it to have a "modern" desktop.

`lightdm-autologin-greeter` needs some configuration to work. You can apply
the configuration with:

    ln -s lightdm.conf /usr/share/lightdm/lightdm.conf.d/70_start_xfce_session.conf

The file must start with `70`, because `lightdm-autologin-greeter` sets the
user session to a template value.

Also is necessary to edit the login username.

## How to test the configuration

**DO NOT LOCK THE SCREEN**. If you lock the screen and go back to the greeter,
it crashes. I don't know why.

## Sources and documentation

* [LightDM home page][0]
* [LightDM page on Arch Linux wiki][1]

[0]: www.freedesktop.org/wiki/Software/LightDM
[1]: https://wiki.archlinux.org/index.php/LightDM
[2]: https://github.com/spanezz/lightdm-autologin-greeter
