import React from 'react';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { profile: [] }
    }
    handelChange = (event) => {
        let fildName = event.target.name;
        let faildValue = event.target.value;
        this.setState({...this.state.profile, [fildName]: faildValue })
    }
    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

    }

    render() {

        return ( <
            div >
            <
            h2 > Profile Details < /h2> <
            form onSubmit = { this.handelSubmit } >
            <
            lable > First Name: < /lable>  <
            input type = "text"
            name = "firstName"
            value = { this.state.profile.name }
            onChange = { this.handelChange }
            / > < br / >
            <
            lable > Last Name: < /lable>  <
            input type = "text"
            name = "lstName"
            onChange = { this.handelChange }
            / > < br / >
            <
            input type = "submit"
            value = "Submit" / >
            <
            input type = "reset"
            name = "reset" / >
            <
            /form> < /
            div >
        )
    }
}

export default Profile;