console.log('App.js is running!');

// JSX
const app = {
    title: 'Indecision App',
    subtitle: 'this is some Info',
    options: ['one', 'two', 'three']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? "here are your options: " + app.options : "No Options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('add');
};
const minusOne = () => {
    console.log('Minus');
};
const reset = () => {
    console.log('reset');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);