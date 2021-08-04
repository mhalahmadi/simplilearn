import React, { Component } from 'react'
import axios from 'axios';
export default class FakeComponrnt extends Component {
    constructor(props) {
        super(props);
        this.state = { fakeData: [], f1: false }
    }
    loadData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(result => {
            if (result.status == 200) {
                //console.log(result.data)
                this.setState({ fakeData: result.data })
                    //console.log(this.fakeData)
            }
        }).catch(error => console.log(error));
    }

    render() {
        return ( <
            div >
            <
            input type = "button"
            value = "load Fake REST API "
            onClick = { this.loadData }
            /> < /
            div >
        )
    }
}