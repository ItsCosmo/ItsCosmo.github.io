#!/bin/bash

# abort on errors
set -e

# build
npm run build

# copy custom 404
cp 404.html dist/404.html

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'www.kleimeyer.com' > CNAME

git init
git checkout -B pages-dist
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:ItsCosmo/ItsCosmo.github.io.git pages-dist

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -