const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	
	entry: {
		app: "./index.js",
		styles: "./src/sass/index.js"
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},

	devServer: {
		publicPath: "/",
		contentBase: "./dist",
		hot: true
	},

	module: {
		rules: [
			{ test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: "static/index.html" },
			{ from: "static/typography.html" },
		])
	]

}