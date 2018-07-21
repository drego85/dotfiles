# PNMixer

[PNMixer][0] is an audio mixer application designed to run in a systray.

I use it because *xfce4-pulseaudio-plugin* application for Xfce panel doesn't work correctly on Debian 9. The icon doens't scale well with other icons; it is fixed on [development version][1], but not on Debian Stable.

# Installation

PNMixer is [correclty packaged][2] on Debian, so just type: `sudo apt install pnmixer`.

It is easy to configure it: just copy the file [`config`][3] to `~/.config/pnmixer/` directory. You can run the custom script [`install`][4] to do some tests and install automatically the configuration.

**Warning**: I use [Papirus Adapta Nokto][5] as icon theme for PNMixer.

[0]: https://github.com/nicklan/pnmixer
[1]: https://git.xfce.org/panel-plugins/xfce4-pulseaudio-plugin/commit/?id=bee333f6ecd6e89d89ef68bf880d93b1fe5fff7a
[2]: https://packages.debian.org/stretch/pnmixer
[3]: config
[4]: install
[5]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme