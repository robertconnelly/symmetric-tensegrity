# Documentation for source code

## Organization

There are two main files:
* `symtens.js` in this directory computes tensegrities and has dependencies managed through `npm`
* `symtens-display.js` in `../js/` manages the display and interaction, and has dependencies in
  `../js/`

## Building

Make sure you have `npm` and `browserify`

    npm install -g browserify

and then install the dependencies with

    npm install

and build the bundle with

    browserify symtens.js --standalone symtens-web > ../js/symtensWeb.js
