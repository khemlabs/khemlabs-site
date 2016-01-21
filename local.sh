npm install -g  node-inspector
npm install
bower install --allow-root
forever -w -c "node --debug" app.js