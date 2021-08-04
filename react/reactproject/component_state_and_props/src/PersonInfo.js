import React from 'react';

class PersonInfo extends React.Component {
    constructor(props) {
            super(props);
            this.state = { pid: 100, name: "mona", age: 33 };
            this.func1 = this.func1.bind(this) // bind to react component
        }
        //we cant access setState function in normal function becaouse
        //this function didn't bind the react component
    func1() {
        console.log("Event fired...")
        this.setState({ name: "jowana", age: 10 });
    }
    func2 = () => {
        this.setState({ name: "rozana", age: 8 });

    }
    render() {


        return ( <
            div >
            <
            h2 > Person Component change state usinf Event < /h2> <
            p > Person ID is { this.state.pid }, Persone Name { this.state.name }, age is { this.state.age } < /p>  <
            br / >
            <
            input type = "button"
            value = "Click Here"
            onClick = { this.func1 }
            / >  <
            input type = "button"
            value = "Click Here"
            onClick = { this.func2 }
            / >  <
            /
            div >
        )
    }
}

export default PersonInfo;