
'use strict';

module.exports.processors = {
	".js": {
		preprocess( text, filename ) {
			return [ text.replace(/:\|/g, `*`) ];
		},

		postprocess( messages, filename ) {
			return messages[0];
		}
	}
};
