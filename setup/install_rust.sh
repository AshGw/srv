#!/bin/bash

if command -v rustc &>/dev/null && command -v cargo &>/dev/null; then
    echo "Rust is already installed."
else
    sudo apt-get update
    sudo apt install curl -y
    curl https://sh.rustup.rs -sSf | sh -s -- -y

    export PATH="$HOME/.cargo/bin:$PATH"
    rustup default stable

    rustc --version
    cargo --version
fi
