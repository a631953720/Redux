// import {TYPE_NAME} from './actionTypes';
import { ADD_DEVICE, SET_NAME, SET_INFO, FETCH_DATA } from './actionTypes';
// export const actions = (props) => action obj
export const addDevice =(id,name,power)=>({
    type:ADD_DEVICE,
    id,name,power
})
export const setDeviceName=(id,name)=>({
    type:SET_NAME,
    id,name
})
export const setDeviceInfo=(id,info)=>({
    type:SET_INFO,
    id,info
})
export const fetchDeviceData=(id,data)=>({
    type:FETCH_DATA,
    id,data
})