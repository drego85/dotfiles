#!/bin/bash
# Crea i collegamenti simbolici.

# -s : solo link simbolici;
# -f : rimuovere il file di destinazione se esistente;
# -v : verboso.
LN="ln -svf"

# TODO: evitare di inserire i file come valori cablati.
$LN ~/.dotfiles/vim/vimrc ~/.vimrc
$LN ~/.dotfiles/vim/colors/solarized.vim ~/.vim/colors/solarized.vim

$LN ~/.dotfiles/bash/bash_aliases ~/.bash_aliases

$LN ~/.dotfiles/git/gitconfig ~/.gitconfig
$LN ~/.dotfiles/git/gitignore ~/.gitignore

$LN ~/.dotfiles/terminator/config ~/.config/terminator/config

$LN ~/.dotfiles/gnupg/gpg.conf ~/.gnupg/gpg.conf
$LN ~/.dotfiles/gnupg/gpg-agent.conf ~/.gnupg/gpg-agent.conf

$LN ~/.dotfiles/bin/composer-install ~/.local/bin/composer-install
chmod u+x ~/.local/bin/composer-install

# VIM plugin
# ------------------------------------------------------------------------------
mkdir -p ~/.vim/plugin
cd ~/.vim/plugin

# TODO: check if the plugins already extisted.

# Hardmode (https://github.com/wikitopian/hardmode)
wget https://raw.githubusercontent.com/wikitopian/hardmode/master/plugin/hardmode.vim

# Vimwiki
git clone https://github.com/vimwiki/vimwiki.git ~/.vim/pack/plugins/start/vimwiki
