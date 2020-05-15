import {ADD_DEVICE,DELETE_DEVICE,SET_DEVICE_INFO} from './actionTypes';

export const addDevice =  (id, name, power) => ({
    type: ADD_DEVICE,
    // payload:{
    id,
    deviceName: name,
    power
    // }
})
export const deleteDevice =(id)=>({
    type: DELETE_DEVICE,
    id
})
export const initialDeviceList = (id, info) =>({
    type: SET_DEVICE_INFO,
    id,
    info
})