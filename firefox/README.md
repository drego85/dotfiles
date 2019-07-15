# Firefox

I use Mozilla Firefox as my main browser. I like it because is privacy focused,
fast and work really well in Linux. It is a big and complex software, it is not
easy to customize it.

In this file there is a tutorial to install my configuration, I also explain
some choices. There is an installer script that does 90% of the things
automatically, but some actions need to be performed manually.

## Installer script

Unfortunately Firefox needs to be customized from GUI instead on CLI, so there
is not a real installer script. The steps to do are:

1. From an active Firefox session, create a new profile with name
   `default-release` (default profile that comes with Fedora). You can access to
   the page via `about:profiles`.
2. Switch to the new profile and delete the old one (if you want).
3. Login to Firefox Sync (or download all extentions you want).
4. Customize Firefox GUI.
5. Once uBlock Origin is installed, load the configuration from
   `ublok_config.txt`.
6. To set custom `user.js`, run my installer script.

## Used extentions

Extentions can't be installed from command line, so you need to install them
manually (or use [Firefox Sync][0]). I use these extentions:

* **CanvasBlocker**: prevent Canvas fingerprinting; [[FA]][1] [[Sources]][2]
* **CSS Exfil Protection**: prevent CSS Exfil attacks; [[FA]][3] [[Source]][4]
* **Decentraleyes**: local emulation of CDN; [[FA]][5] [[Source]][6]
* **HTTPS Everywhere**: force HTTPS on sites; [[FA]][7] [[Source]][8]
* **Tridactyl**: VIM keybindings on Firefox; [[FA]][9] [[Source]][10]
* **uBlock Origin**: general blocker; [[FA]][11] [[Source]][12]

All these extentions are automatically updated via Firefox, so you only need to
download them the first time.

## user.js

The `user.js` file is a file with all options to customize Firefox behaviour.
Many options can be selected from the graphical interface, but lots are hidden.

I use [ghacks' `user.js`][13], an `user.js` enhanced for privacy. I don't like
some options, so I have also a custom [`user.js`][14] that overrides some
options.

The script I've created, [`install`][15], downloads the latest version of
ghacks' `user.js` and move that file to the Firefox profile with suffix
`emanuele` (my name). At the end it append my custom options to `user.js` file
on the profile.

[0]: https://www.mozilla.org/en-US/firefox/features/sync/
[1]: https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/
[2]: https://github.com/kkapsner/CanvasBlocker
[3]: https://addons.mozilla.org/en-US/firefox/addon/css-exfil-protection/
[4]: https://github.com/mlgualtieri/CSS-Exfil-Protection
[5]: https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/
[6]: https://git.synz.io/Synzvato/decentraleyes
[7]: https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/
[8]: https://github.com/EFForg/https-everywhere
[9]: https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/
[10]: https://github.com/cmcaine/tridactyl
[11]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
[12]: https://github.com/gorhill/uBlock
[13]: https://github.com/ghacksuserjs/ghacks-user.js
[14]: user.js
[15]: install
