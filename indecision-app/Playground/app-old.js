console.log('App.js is running!');

// JSX
const app = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    alert(app.options[Math.floor(Math.random() * app.options.length)]);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "here are your options: " : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {app.options && app.options.length > 0 &&
            <ol>
                {app.options.map((opt) => <li key={opt}>{opt}</li>)}
            </ol>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();
