class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibility: false};
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility() {
        this.setState((prevState) => ({visibility: !prevState.visibility}));
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide content' : 'Show content'}</button>
                {this.state.visibility && <p>This is the content!</p>}
            </div>
        )
    }


}

ReactDOM.render(<ToggleVisibility/>, document.getElementById('app'));

//Old
// console.log("I'm running");
// const appRoot = document.getElementById('app');
//
// let visible = false;
//
// const onClick = () => {
//     visible = !visible;
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Toggle Visibility</h1>
//             {<button onClick={onClick}>{visible ? 'Hide Details' : 'Show Details'}</button>}
//             {visible && <p>This data to be visible!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
//
// render();