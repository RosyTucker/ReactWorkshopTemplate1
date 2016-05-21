COMMIT_MESSAGE=$(git log -1 --pretty=%B)

echo "Copying package.json"
cp package.json dist/package.json

echo "Copying server"
cp server.js dist/server.js

cd dist

echo Creating git repo, with heroku origin $HEROKU_REPO
git init
git remote add heroku $HEROKU_REPO
git remote

echo "Staging files"
git add -A
git status

echo "Committing with message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo "Pushing to heroku"
git push heroku master -f
