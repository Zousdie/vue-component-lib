#!/bin/bash

set -e

git checkout master

git pull origin master

git merge origin/dev

echo "Enter release version: "

read VERSION

VERSION=`npm version $VERSION --no-git-tag-version`

npm run changelog

echo "release version: "$VERSION

git add .

git commit -m "$VERSION"

npm publish

git tag "$VERSION"

git push

git push origin $VERSION

git checkout dev

git rebase master

git push
