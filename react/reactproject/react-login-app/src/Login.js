import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: "", pass: "", msg: "" }
    }
    handleChange = (event) => {
        let inputName = event.target.name
        let inputValue = event.target.value;
        // console.log("event fiers.." + inputValue);
        // console.log(inputName + " " + inputValue);

        this.setState({
            [inputName]: inputValue
        });

    }

    handelSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        if (this.state.user === "Mona" && this.state.pass === "124") {
            this.setState({ msg: "Successfully Login" })
        } else {
            this.setState({ msg: "Failure try once again" })
        }
    }

    render() {

        return ( <
            div >
            <
            h2 > Login Page < /h2>   <
            form onSubmit = { this.handelSubmit } >
            <
            label > UserName < /label>  <
            input type = "text"
            name = "user"
            onChange = { this.handleChange }
            /> <br/ >
            <
            label > Password < /label>  <
            input type = "password"
            name = "pass"
            onChange = { this.handleChange }
            /> <br/ >
            <
            input type = "submit"
            name = "submit" / >
            <
            input type = "reset"
            name = "reset" / >

            <
            /form>  <
            br / > { this.state.msg } <
            /div>
        )
    }
}

export default Login;