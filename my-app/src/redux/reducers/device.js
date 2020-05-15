import { ADD_DEVICE, DELETE_DEVICE, SET_DEVICE_INFO } from '../actionTypes';
export const device = (state = [], action) => {
    switch (action.type) {
        case ADD_DEVICE:
            return [...state, {
                id: action.id,
                deviceName: action.deviceName,
                power: action.power
            }];
        case DELETE_DEVICE:
            return deleteDevice(state, action.id);
        case SET_DEVICE_INFO:
            return initialDevice(state, action.id, action.info);
        default:
            return state;
    }
}

const deleteDevice = (state, id) => {
    let tmp = state.slice();
    return tmp.filter(state => state.id !== id);
}
const initialDevice = (state, id, info) => {
    let tmp = state.slice();
    return tmp.map(state => {
        if (state.id === id) {
            return {
                ...state,
                info: info
            };
        } else {
            return state;
        }
    })
}