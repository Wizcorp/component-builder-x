# component-builder-x changelog

##v0.1.3
 * Put concurrency limits back in.
 * Actually cache the json so we don't read the same file over and over and over again.
 * Don't buildAliases for components you've already built aliases for.

##v0.1.2
 * Dropped node v0.8 support by changing setTimeout to setImmediate.
 * Removed concurrency limits in batch as they don't seem necessary.
 * Replaced map and reduce with simple iterators.
 * Added explanation in the readme as to what is special about component-builder-x.

##v0.1.1
 * Added unit tests.
 * When a json file cannot be parsed, we return an error instead of throwing.

##v0.1.0
 * Initial release

