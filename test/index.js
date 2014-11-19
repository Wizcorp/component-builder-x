var assert = require('assert');
var Builder = require('../');

var componentA = new Builder('./test/a');

var aliases = componentA.buildAliases(function (error) {
	if (error) {
		assert(error);
	}
});
