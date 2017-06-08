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
        "webpack": {
            "type": "confirm",
            "message": "Install webpack dev environment? (if 'no', a simple template is installed)"
        },
        "port": {
            "when": "webpack",
            "type": "number",
            "label": "Port number",
            "default": 5000
        },
        "tslint": {
            "when": "webpack",
            "type": "confirm",
            "message": "Setup lint with TSLint?"
        },
        "stylelint": {
            "when": "webpack",
            "type": "confirm",
            "message": "Setup CSS/SASS lint with stylelint?"
        },
        "unit": {
            "when": "webpack",
            "type": "confirm",
            "message": "Setup unit tests with Karma + Jasmine?"
        },
        "e2e": {
            "when": "webpack",
            "type": "confirm",
            "message": "Setup e2e tests with Nightwatch + Selenium?"
        }
    },
    "filters": {
        ".vscode/launch.json": "webpack",
        "conf/**/*": "webpack",
        "src/**/*": "webpack",
        "conf/tslint.json": "webpack && tslint",
        "conf/stylelint.json": "webpack && stylelint",
        "conf/karma.conf.js": "webpack && unit",
        "tests/**/*": "webpack && (unit || e2e)",
        "tests/unit.js": "webpack && unit",
        "conf/nightwatch.conf.js": "webpack && e2e",
        "tests/e2e/**/*": "webpack && e2e"
    },
    "skipInterpolation": [
        "src/**/*",
        "test/**/*"
    ],
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev (or npm run tsc)"
}