[![NPM](https://nodei.co/npm/component-builder-x.png?downloads=true)](https://nodei.co/npm/component-builder-x/)

[![Build Status](https://travis-ci.org/Wizcorp/component-builder-x.png)](https://travis-ci.org/Wizcorp/component-builder-x)

# component-builder-x

This project is a fork of component-builder with a few fixes applied to it that Wizcorp found to
be useful. Usage is exactly the same as component-builder.

## What's Fixed?

* It doesn't [silenty fail to build half of your components when stack limits get exceeded](https://github.com/componentjs/builder.js/pull/137).
* It doesn't [explode your open file limits](https://github.com/componentjs/builder.js/issues/66).
* It doesn't [explode when you have malformed dependencies](https://github.com/Wizcorp/component-builder-x/issues/1).
* It doesn't [repeatedly build the same aliases over and over and over and over again](https://github.com/componentjs/builder.js/issues/117).
* It doesn't [repeatedly read the same component.json files over and over and over again](https://github.com/componentjs/builder.js/issues/66)

## Installation

    $ npm install component-builder-x

## API

### new Builder(dir)

  Creates a new `Builder` for the given component's `dir`:

```js
var Builder = require('component-builder-x');
var builder = new Builder('components/visionmedia-page');
```

### Builder#config

  The component's component.json contents as an object.

### Builder#addSourceURLs()

  Add "sourceURL" support, wrapping the module functions
  in `Function()` calls so that browsers may assign a
  name to the scripts to aid in debugging.

### Builder#addLookup(path)

  Append the given dependency lookup `path`. This lookup `path` is
  "global", thus it influences all dependency lookups.

### Builder#development()

  Include development dependencies.

### Builder#addFile(type, filename, val)

  Add a fabricated file of the given `type`, `filename`,
  and contents `val`. For example if you were translating
  a Stylus file to .css, or a Jade template to .js you may
  do something like:

```js
builder.addFile('scripts', 'view.js', 'compiled view js');
```

### Builder#ignore(name, [type])

  Ignore building `name`'s `type`, where `type` is "scripts" or "styles". When
  no `type` is given both are ignored, this includes dependencies of `name` as well.

```js
builder.ignore('visionmedia-page')
```

### Builder#build(fn)

  Perform the build and pass an object to `fn(err, obj)` containing
  the `.css` and `.js` properties.

### Builder#hook(name, fn)

  A build "hook" is like an event that lets you manipulate the build in process. For
  example you may use a hook to translate coffee script files to javascript automatically,
  or compile a template to javascript so that it may be loaded with `require()`, or use
  CSS pre-processors such as [rework](https://github.com/visionmedia/rework).

  Available hooks are:
  - `before scripts`
  - `before styles`

## Examples

### Basic build

  The follow demonstrates the most basic build you can possible do using
  this component builder implementation. A root component directory is
  passed to `new Builder`, followed by a `.build()` call which then responds
  with a `res` object containing the followign properties:

  - `.require` the require implementation script
  - `.js` compiled javascript
  - `.css` compiled css

```js
var builder = new Builder('lib/boot');

builder.build(function(err, res){
  if (err) throw err;
  console.log(res.require + res.js);
  console.log(res.css);
});
```

### Lookup paths

  In the previous example all the application's private components live in `./lib`,
  thus if you want to specify dependencies without a leading `"lib/"` a lookup path
  should be created with `.addLookup()`:

```js
var builder = new Builder('lib/boot');

builder.addLookup('lib');
...
```

## License

  MIT
