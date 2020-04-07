import React from 'react';
import { connect } from "react-redux";
import { setActivity } from '../redux/Actions';
import UpdateName from './Name';

const Activity = ({activity, name, setActivity}) => (
    <>
        <h1>What is the Cat doing?</h1>
        <p>{name} is {activity}</p>
        <button onClick={() => setActivity("Eating")}>Eating</button>
        <button onClick={() => setActivity("Playing")}>Playing</button>
        <button onClick={() => setActivity("napping")}>Napping</button>
        <UpdateName />
    </>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps,
    { setActivity }
        )(Activity);