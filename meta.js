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
        "port": {
            "type": "number",
            "label": "Port number",
            "default": 5000
        },
        "tslint": {
            "type": "confirm",
            "message": "Setup lint with TSLint?"
        },
        "stylelint": {
            "type": "confirm",
            "message": "Setup CSS/SASS lint with stylelint?"
        },
        "unit": {
            "type": "confirm",
            "message": "Setup unit tests with Karma + Jasmine?"
        },
        "e2e": {
            "type": "confirm",
            "message": "Setup e2e tests with Nightwatch + Selenium?"
        }
    },
    "filters": {
        "conf/tslint.json": "tslint",
        "conf/stylelint.json": "stylelint",
        "conf/karma.conf.js": "unit",
        "tests/unit/**/*": "unit",
        "conf/nightwatch.conf.js": "e2e",
        "tests/e2e/**/*": "e2e"
    },
    "skipInterpolation": [
        "src/**/*",
        "test/**/*"
    ],
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
}