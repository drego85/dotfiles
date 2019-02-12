# GnuPG

I use GnuPG to manager my PGP keys. GnuPG have also an agent called
`gpg-agent`, I use it also for SSH support. There is some configuration because
out-of-the-box Fedora uses `ssh-agent` and `gnome-keyring`.

## GnuPG configuration

The GnuPG file configuration is located at `~/.gnupg/gpg.conf`. My
configuration is really simple: I use Fedora keyserver, I want to use the agent
and some small customizations. To apply:

    $ ln -s gpg.conf ~/.gnupg/gpg.conf

## gpg-agent configuration

### Configuration

You can apply the configuration with:

    $ ln -s gpg-agent.conf ~/.gnupg/gpg-agent.conf

### Daemon management

There is a default daemon enabled of `gpg-agent`, but I prefer to manage the
daemon with `systemd --user`. Luckyly GnuPG comes with default files for
systemd, but they are not enabled. To enable:

    # Create the directory if it doesn't already exist.
    $ mkdir -p ~/.config/systemd/user

    # Copy the files.
    $ cd /usr/share/doc/gnupg2/examples/systemd-user
    $ cp *.{socket,service} ~/.config/systemd/user

    # Refresh systemd.
    $ systemctl --user daemon-reload

    # Enable and start the sockets.
    $ systemctl --user enable *.socket
    $ systemctl --user start *.socket

Thanks to [eklitzke][0].

### SSH support

Now it is necessary to enable `gpg-agent` for SSH support. It is necessary to
specify the environment variable `SSH_AUTH_SOCK` to point to `gpg-agent`
socket. This line is already added in my custom `.bashrc` file:

    export SSH_AUTH_SOCK="/run/user/$(id -u)/gnupg/S.gpg-agent.ssh"

I use Xfce as desktop environment. There is only one problem: it autostarts
`ssh-agent`. I don't want it, so I kill it every time Xfce is started. This
line is already added in my custom `.bash_profile` file:

    pkill ssh-agent

### Pinentry

I don't like the default pinenetry that uses ncurses. So I installed
`pinentry-gtk`:

    $ sudo dnf install pinenetry-gtk

## Key import and export

TODO

* Instructions to start up gnupg with my keys;
* Instructions to export my keys when I want to reset my pc.

[0]: https://eklitzke.org/using-gpg-agent-effectively
