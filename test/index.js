/*eslint-env mocha*/

'use strict';

const assert = require('assert');

const plugin = require('../src/index.js');
function process( text ) {
	return plugin.processors['.js'].preprocess( text, 'fake.js' )[0];
}

describe(`@straits/eslint-plugin`, function(){
	it(`works`, function(){
		assert.strictEqual(
			process(`
				use traits * from ({x = 2});
				Object.*yo = Object.keys;
				Object.*hey = Object.*yo;
				Object.*hey( Object );
			`),
			`
				Object._StraitsProvider = ({x = 2});
				Object._Straits.yo = Object.keys;
				Object._Straits.hey = Object._Straits.yo;
				Object._Straits.hey( Object );
			`
		);
	});
});
