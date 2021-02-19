#!/bin/bash
echo "Starting build"
echo ""
rm -Rfv dist &
NODE_ENV=production ./node_modules/.bin/babel --ignore "./src/assets","./src/components","./src/lotties" --plugins "@babel/plugin-transform-runtime" --presets "@babel/preset-env","@babel/preset-react","minify" ./src --out-dir ./dist
echo ""
echo "Finish build"
