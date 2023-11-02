FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

WORKDIR /workspace
# rust isntallation 
RUN apt-get update && \
    apt-get install curl -y && \
    curl https://sh.rustup.rs -sSf | sh -s -- -y && \
    source "$HOME/.cargo/env" && \
    rustc --version && \
    cargo --version


# project setup 
RUN npm install


CMD ["npm", "run", "prepare", "&&", "chmod", "+x", ".husky/pre-commit", "&&", "npm", "run", "dev"]
