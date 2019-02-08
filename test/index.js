/*eslint-env mocha*/

'use strict';

const assert = require('assert');

const plugin = require('../src/index.js');
function process( text ) {
	return plugin.processors['.js'].preprocess( text, 'fake.js' )[0];
}

describe(`eslint-plugin-opipe`, function(){
	it(`works`, function(){
		assert.strictEqual(
			process(`
				x :| y() :| z.fn( a.a.a :| b[1]() )
			`),
			`
				x * y() * z.fn( a.a.a * b[1]() )
			`
		);

		assert.strictEqual( plugin.processors['.js'].postprocess([`hey`, `yo`], `meh`), `hey` );
	});
});
