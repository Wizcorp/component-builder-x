# component-builder-x changelog

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

