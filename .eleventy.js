const pluginSyntaxHighlighter = require('./index.js');

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(pluginSyntaxHighlighter, {});

	return {
		dir: {
			input: './tests/test-site/',
			output: './tests/test-site/_site'
		}
	};
};