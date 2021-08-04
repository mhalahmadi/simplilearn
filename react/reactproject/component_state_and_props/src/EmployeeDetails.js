import React from 'react';
import ProjectDetails from './ProjectDetails';


class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props); //this  code is user to call super class ie component  constructor
        this.state = { name: "Mona", age: 33 }; // sysntax to creat the state.
    }

    render() {

        return ( <
            div >
            <
            h2 > Emplyee Component < /h2> <
            h3 > State veriable valueis < /h3> <
            p > Name is { this.state.name }, and Age is { this.state.age } < /p> <
            h3 > Props value is < /h3> <
            p > Designation is { this.props.desg }
            and city is { this.props.city } < /p> <
            ProjectDetails pname = "web"
            tech = "React JS" > < /ProjectDetails> <
            ProjectDetails pname = "Desktop"
            tech = "Java" > < /ProjectDetails> <
            ProjectDetails pname = "Mobile"
            tech = "Android" > < /ProjectDetails>

            <
            /
            div >
        )
    }
}

export default EmployeeDetails;