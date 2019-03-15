install: 
	npm install
start:
	npm run babel-node -- src/bin/brain-progression.js
lint:
	npm run eslint .
publish:
	npm publish
