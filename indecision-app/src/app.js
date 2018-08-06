console.log('App.js is running!');

// JSX
var app = {
    title:'Indecision App',
    subtitle:'this is some Info'
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);