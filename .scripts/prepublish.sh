#!/bin/bash
echo "Starting build"
echo ""
rm -Rfv dist &
NODE_ENV=production webpack --mode production
echo ""
echo "Finish build"
