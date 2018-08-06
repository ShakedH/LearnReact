'use strict';

console.log('App.js is running!');

// JSX
var app = {
    title: 'Indecision App',
    subtitle: 'this is some Info'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
