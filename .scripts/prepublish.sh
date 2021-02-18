#!/bin/bash
rm -Rfv dist &
NODE_ENV=production ./node_modules/.bin/babel ./src --out-dir ./dist
