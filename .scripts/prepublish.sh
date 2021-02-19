#!/bin/bash
echo "Starting build"
echo ""
rm -Rfv dist &
esbuild "./src/index.jsx" --bundle --define:process.env.NODE_ENV=\"production\" --minify --outfile="./dist/index.js"
# NODE_ENV=production ./node_modules/.bin/babel --ignore "./src/assets","./src/components","./src/lotties" --plugins "@babel/plugin-transform-runtime" --presets "react-app" ./src --out-dir ./dist
echo ""
echo "Finish build"
