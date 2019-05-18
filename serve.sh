#!/bin/bash -e

npm install
npm run build
screen -d -m -S reborn-client bash -c 'serve -s build'