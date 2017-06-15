module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "label": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "label": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "label": "Author"
        },
        "devenv": {
            "type": "list",
            "message": "Pick a development environment?",
            "choices": [{
                "name": "Webpack (full-featured Webpack + Typescript setup with hot-reload)",
                "value": "webpack",
                "short": "webpack"
            }, {
                "name": "Simple (tsc compiler only)",
                "value": "simple",
                "short": "simple"
            }]
        },
        "port": {
            "when": "devenv == 'webpack'",
            "type": "number",
            "label": "Port number",
            "default": 5000
        },
        "tslint": {
            "when": "devenv == 'webpack'",
            "type": "confirm",
            "message": "Setup lint with TSLint?"
        },
        "stylelint": {
            "when": "devenv == 'webpack'",
            "type": "confirm",
            "message": "Setup CSS/SASS lint with stylelint?"
        },
        "unit": {
            "when": "devenv == 'webpack'",
            "type": "confirm",
            "message": "Setup unit tests with Karma + Jasmine?"
        },
        "e2e": {
            "when": "devenv == 'webpack'",
            "type": "confirm",
            "message": "Setup e2e tests with Nightwatch + Selenium?"
        }
    },
    "filters": {
        ".vscode/launch.json": "devenv == 'webpack'",
        "conf/**/*": "devenv == 'webpack'",
        "src/app/**/*": "devenv == 'webpack'",
        "src/lang/**/*": "devenv == 'webpack'",
        "src/page2/**/*": "devenv == 'webpack'",
        "src/public/**/*": "devenv == 'webpack'",
        "src/themes/**/*": "devenv == 'webpack'",
        "src/index.html": "devenv == 'webpack'",
        "src/str.ts": "devenv == 'simple'",
        "src/**/*.spec.ts": "devenv == 'webpack' && unit",
        "conf/tslint.json": "devenv == 'webpack' && tslint",
        "conf/stylelint.json": "devenv == 'webpack' && stylelint",
        "conf/karma.conf.js": "devenv == 'webpack' && unit",
        "tests/**/*": "devenv == 'webpack' && (unit || e2e)",
        "tests/unit.js": "devenv == 'webpack' && unit",
        "conf/nightwatch.conf.js": "devenv == 'webpack' && e2e",
        "tests/e2e/**/*": "devenv == 'webpack' && e2e"
    },
    "skipInterpolation": [
        "src/**/*",
        "test/**/*"
    ],
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev (or npm run tsc)"
}