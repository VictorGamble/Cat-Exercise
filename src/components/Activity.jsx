import React from 'react';
import { connect } from "react-redux";
import { eat, nap, play } from '../redux/Actions';



const Activity = ({activity, eat, play, nap}) => (
    <div>
        <h1>What is the cat doing?</h1>
        <p>The cat is {activity}</p>
        <button onClick={() => eat()}>Eating</button>
        <button onClick={() => play()}>Playing</button>
        <button onClick={()=> nap()}>Napping</button>
    </div>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps,
    { eat, play, nap }
        )(Activity);