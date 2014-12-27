helloRequireJS
==============
HelloWorld project with require.js

To do this from the scratch
---------------------------

- Create folders `app, test`
- `npm init`
- `npm install requirejs --save-dev`
- Create files: `index.html, app/HelloWord.js, saySomething.js`
- Edit index.html to add: ` <script data-main="app/HelloWorld" src="node_modules/requirejs/require.js"></script>`
- Add `require ...etc` to HelloWord.js
- Add `define ...etc` to saySomething.js
- Run it on a browser from four IDE or set up a vhost on apache.