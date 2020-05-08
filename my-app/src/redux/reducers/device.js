import { ADD_DEVICE, DELETE_DEVICE, INITIAL_DEVICE } from '../actionTypes';
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
        case INITIAL_DEVICE:
            return initialDevice(state, action.id, action.info);
        default:
            return state;
    }
}

const deleteDevice = (state, id) => {
    let tmp = state
    return tmp.filter(subState => subState.id !== id)
}
const initialDevice = (state, id, info) => {
    let tmp = state.slice()
    return tmp.map(state => {
        if (state.id === id) {
            return {
                ...state,
                info: info
            }
        } else {
            return state
        }
    })
}