// import {TYPE_NAME} from './actionTypes';
import {CHANGE_POWER,ADD_DEVICE} from './actionTypes';

// export const actions = (props) => action obj
export const changePower = (id) => ({
    type:CHANGE_POWER,
    id
})
export const addDevice = (id,power) => ({
    type:ADD_DEVICE,
    id,
    power
})