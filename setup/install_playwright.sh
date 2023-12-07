#!/bin/bash

pnpm exec playwright install  
# if ure somehow on WSL add deez: 
# sudo apt-get install xauth -y
# sudo apt-get install -y xvfb
# run this when ure ready to plug in the GUI
# xvfb-run -a npx playwright codegen