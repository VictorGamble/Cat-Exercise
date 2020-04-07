import { Action_Set_Activity, Action_Set_Name} from './ActionTypes';


export const setActivity = activity => ({
    type: Action_Set_Activity,
    payload: {
        activity
    }
})


export const setName = name => ({
    type: Action_Set_Name,
    payload: {
        name
    }
})

