if command -v rustc &>/dev/null && command -v cargo &>/dev/null; then
    echo "Rust is already installed."
else
    apt-get update
    apt install curl -y
    curl https://sh.rustup.rs -sSf | sh -s -- -y
    source "$HOME/.cargo/env"
    rustc --version
    cargo --version
fi
