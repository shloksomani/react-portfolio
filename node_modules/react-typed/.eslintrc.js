module.exports = {
    //"parser": "babel-eslint", //if installed babel-eslint
    "env": {  //can also add mocha, jquery, etc http://eslint.org/docs/user-guide/configuring#specifying-environments
        "browser": true,  //if project is executed in browser
        "es6": true,  //if you need es6 features
        "node": true  //if project runs in node
    },
    "extends": ["airbnb-base", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,  //default is 5, supports 6,7,8 or 2015,2016,2017.  If es6 is true in env then this is set to 6 by default
        "ecmaFeatures": {
            "classes": true,
            "experimentalObjectRestSpread": true,  //if using react or spread operators
            "jsx": true //if using react or plain jsx
        },
        "sourceType": "module"  // can be module or script
    },
    "plugins": [
        "react"
        //if installed eslint-plugin-react
    ],
    "rules": {  //rule overrides go here http://eslint.org/docs/user-guide/configuring#configuring-rules
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        "class-methods-use-this": 0,
        "react/display-name": 0,
        "max-len": 150,
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }]
    }
};