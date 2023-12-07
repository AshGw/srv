#!/bin/bash

if command -v rustc &>/dev/null && command -v cargo &>/dev/null; then
    echo "Rust is already installed."
else
    sudo apt-get update
    sudo apt install curl -y
    curl -sSfL https://raw.githubusercontent.com/AshGw/dotfiles/main/install/rust | zsh
 