import { SET_DEVICE_INFO_PROPS, CHANGE_POWER, COMMAMD } from '../actionTypes';

export const userControl = (state = [], action) => {
    switch (action.type) {
        case SET_DEVICE_INFO_PROPS:
            return setDeviceProps(state, action.id, action.info)
        case CHANGE_POWER:
            return changeDevicePower(state, action.id, action.power)
        case COMMAMD:
            return command(state, action)
        default:
            return state
    }
}
const setDeviceProps = (state, id, info) => {
    let tmp = state.slice();
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
const changeDevicePower = (state, id, power=undefined) => {
    let tmp = state.slice();
    return tmp.map(_state => {
        if (_state.id === id && power !== undefined) {
            return {
                ..._state,
                power: power
            }
        } else if(_state.id === id && power === undefined){
            return {
                ..._state,
                power: !_state.power
            }
        } else {
            return _state
        }
    })
}
const command = (state, action) => {
    let tmp = state.slice()
    return tmp.map(
        state =>
            state.id === action.id ?
                { ...state, command: action.command } :
                state
    )
}