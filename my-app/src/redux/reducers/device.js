import { ADD_DEVICE, SET_NAME, SET_INFO, FETCH_DATA } from '../actionTypes';

export function device(state = [], action) {
    switch (action.type) {
        case ADD_DEVICE:
            return [...state, {
                id: action.id,
                name: action.name,
                power: action.power
            }]
        case SET_NAME:
            return setName(state, action.id, action.name);
        case SET_INFO:
            return setInfo(state, action.id, action.info);
        case FETCH_DATA:
            return fetchData(state, action.id, action.data)
        default:
            return state;
    }
}
function setName(state, id, name) {
    let tmp = state.slice();
    return tmp.map(_state => {
        if (_state.id === id) {
            return { ..._state, name };
        } else {
            return _state;
        }
    })
}
function setInfo(state, id, info) {
    let tmp = state.slice();
    return tmp.map(_state => {
        if (_state.id === id) {
            return { ..._state, info }
        } else {
            return _state
        }
    })
}
function fetchData(state, id, data) {
    let tmp = state.slice();
    return tmp.map(_state => {
        if (_state.id === id) {
            return { ..._state, data }
        } else {
            return _state
        }
    })
}