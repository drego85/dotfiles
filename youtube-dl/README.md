# youtube-dl

[`youtube-dl`][1] is a program that can be used to download videos and audios
from a [very large list][2] of websites, such as YouTube. I use it frequently to
download music.

The problem is that youtube-dl on Debian package repositories is an old version.
API of YouTube changes frequently, so it is better to install it manually,
without any package manager. The script [`install`][3] does this job.

## Dependencies to run installer script

* wget: to download youtube-dl from its GitHub repository;
* [utils.sh][4]: my custom Bash library that contains some useful functions.

[1]: https://rg3.github.io/youtube-dl/
[2]: https://rg3.github.io/youtube-dl/supportedsites.html
[3]: install
[4]: ../.common/utils.sh
