#!/bin/bash

if [ -z "$1" ]
then
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
fi
rm -Rfv $1 &
build-storybook
git push origin :gh-pages
git add $1
git commit -m "Upload storybook to gh pages"
git subtree push --prefix $1 origin gh-pages