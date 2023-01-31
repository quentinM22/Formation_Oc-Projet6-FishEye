module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: "eslint:recommended",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"no-undef": "warn",
		"no-unused-vars": "warn",
		"no-useless-escape": "warn",
	},
	ignorePatterns: ["**/*.html"],
}
