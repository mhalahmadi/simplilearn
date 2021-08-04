import React, { Component } from 'react'
import { connect } from 'react-redux';
class child1 extends Component {

    render() {
        return ( <
            div >
            <
            h2 > Child1 Component < /h2> <
            p > EMP ID is { this.props.id } < /p> < /
            div >

        )
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}

export default connect(mapStateToProps)(child1);