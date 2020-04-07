import { Action_Nap, Action_Eat, Action_Play } from './ActionTypes';


export const nap = () => {
    return { type: Action_Nap };
}

export const eat = () => {
    return { type: Action_Eat };
}

export const play = () => {
    return { type: Action_Play };
}

