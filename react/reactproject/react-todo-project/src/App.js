import './App.css';
import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react'
import { connect } from 'react-redux';
//let nextid = 0;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { title: "hi", id: uuidv4() } // { todo: [{ id: 1, isChecked: true, title: "hi" }] }
    }



    handleChange = (event) => {
            event.preventDefault();
            this.setState({
                    //title: event.target.value,
                    [event.target.name]: event.target.value,
                    id: uuidv4()
                        //console.log(id)
                })
                // let input = event.target.getAttribute("title");
            console.log(event.target.value)
                //console.log()
        }
        // removeTodo(id) {
        //  const remainder = this.props.todo.filter(item => item.id !== id);
        // }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });

    }

    render() {
        return ( <
            div >
            <
            h2 > Create a Todo < /h2>       <

            input type = "text"
            name = "title"

            onChange = { this.handleChange /* e => this.setState({ title: e.target.value })*/ }
            //value = { this.state.title }

            / > <
            input type = "button"
            value = "ADD A TODO"
            onClick = {
                () => this.props.add(this.state.title)

            }

            / > <
            h2 > Todo List < /h2>    <
            ul > {
                this.props.todo.map(element => ( <
                    li key = { element.id } > { element.title } < label >
                    <
                    input type = "checkbox"
                    defaultChecked = { element.isChecked }
                    onChange = { this.toggleChange }
                    /> < /
                    label > <
                    input type = "button"
                    value = "EDITE "
                    // onClick = {
                    //   () => this.props.edite(this.state.title)
                    //}
                    /
                    >
                    <
                    input type = "button"
                    value = "DELETE"
                    onClick = {
                        // () => props.remove(element.id)
                        () => this.props.delete(element.id)

                    }
                    / > < /
                    li >
                ))
            }

            <
            /ul>

            <
            /div >
        )
    }
}

function nextTodoID(todo) {
    const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1;
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        title: state.title,
        id: state.id
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        //check: (isChecked) => dispatch({ type: "CHECKED", playload: isChecked }),
        add: (title, id) => dispatch({
            type: "ADD",
            payload: title,
            pid: id

        }),


        delete: (id) => dispatch({ type: "DELETE", payload: id })
            //edit: (isChecked) => dispatch({ type: "EDIT", payload: title })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect app component to store