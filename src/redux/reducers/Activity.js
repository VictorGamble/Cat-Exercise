import { Action_Nap, Action_Eat, Action_Play } from '../ActionTypes';




const initialState = {
    activity: 'napping'

}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case (Action_Nap): {
            return {
                ...state,
                activity: "napping"
            }
        }
        case (Action_Eat): {
            return {
                ...state,
                activity: "eating"
            }
        }
            case (Action_Play): {
            return {
                ...state,
                activity: "playing"
            }
        }
        default:
            return state;
    }
}


export default activityReducer;