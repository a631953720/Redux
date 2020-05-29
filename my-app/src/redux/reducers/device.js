import { CHANGE_POWER, ADD_DEVICE } from '../actionTypes';
export const device = (state = [], action) => {
    switch (action.type) {
        case CHANGE_POWER:
            return changePower(state, action.id)
        case ADD_DEVICE:
            return addDevice(state, action.id, action.power)
        default:
            return state;
    }
}
function changePower(state, id) {
    let tmp = state.slice();
    return tmp.map(_state => {
        if (_state.id === id) {
            return { ..._state, power: !_state.power };
        } else {
            return _state;
        }
    })
}
function addDevice(state, id, power) {
    return [...state, { id, power }]
}