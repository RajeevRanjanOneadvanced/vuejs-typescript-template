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
        "private": {
            "type": "boolean",
            "default": true
        },
        "router": {
            "type": "confirm",
            "message": "Install vue-router?"
        },
        "tslint": {
            "type": "confirm",
            "message": "Setup lint with TSLint?"
        },
        "unit": {
            "type": "confirm",
            "message": "Setup unit tests with Karma + Jasmine?"
        },
        "e2e": {
            "type": "confirm",
            "message": "Setup e2e tests with Nightwacth?"
        }
    },
    "filters": {
        "conf/tslint.json": "tslint"
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev"
}