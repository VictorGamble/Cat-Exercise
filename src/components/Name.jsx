import React, { Component } from "react";
import { connect } from "react-redux";
import { setName } from "../redux/Actions";


class UpdateName extends Component {
    state = {
        name: "Guster"
    }

    handleChange = e => {
        const {name} = e.target.value
        this.setState({
            name
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.setName(this.state.name)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="input name"></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default connect(
    null,
    { setName }
)(UpdateName);
