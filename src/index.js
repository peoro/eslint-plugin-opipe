
'use strict';

module.exports.processors = {
	".js": {
		preprocess( text, filename ) {
			text = text
				.replace( /((?:NaN|Infinity|-?(?:(?:\d+|\d*\.\d+)(?:[Ee][+-]?\d+)?)))\.\*/g, (match, num)=>`(${num}).*` )
				.replace( /\.\*/g, `._Straits.` )
				.replace( /use\s+traits\s+\*\s+from/mg, `Object._StraitsProvider =` );

			return [text];
		},

		postprocess( messages, filename ) {
			return messages[0];
		}
	}
};
