#!/bin/bash

sudo apt-get update 
npx playwright install --with-deps
# Do it on WSL 
# sudo apt-get install xauth -y
# sudo apt-get install -y xvfb
# run this when ure ready to plug in the GUI
# xvfb-run -a npx playwright codegen