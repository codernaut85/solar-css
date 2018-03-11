module.exports = {
	
	entry: {
		app: "./index.js",
		styles: "./sass/index.js"
	},

	output: {
		filename: "[name].js"
	},

	module: {
		rules: [
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
		]
	}
}