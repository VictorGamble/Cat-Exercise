import { Action_Set_Activity, Action_Set_Name } from '../ActionTypes';




const initialState = {
    name: 'Guster',
    activity: "Napping"

}


const activityReducer  = (state = initialState, action) => {
    switch (action.type) {
        case Action_Set_Activity: {
            const { activity } = action.payload;
            return {
                ...state,
                activity
            }
        }
        case Action_Set_Name: {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }
        default:
            return state;
    }
}


export default activityReducer;