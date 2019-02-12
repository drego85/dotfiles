# TLP – Linux Advanced Power Management

TLP is an useful package to manage power and extends battery life. It works well
with other power management software (like `xfce4-powermanager`).

## Installation

TLP is available on Fedora:

    $ sudo dnf install tlp

The default configuration file, located on `/etc/default/tlp` is good, but I've
done some customization (I'm using a Thinkpad laptop). To start TLP:

    $ sudo tlp start

You can check the configuraton and some other statistics with:

    $ sudo tlp stat

You can also switch the WiFi or Bluetooth with `wifi [on/off]` or `bluetooth
[on/off]`.

## Installer script

I created a small Bash script that done all these things automatically. It also
apply my custom configuration. Run the script from this folder:

    $ ./install
