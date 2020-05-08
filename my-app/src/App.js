import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore,combineReducers } from "redux";
import { ReactReduxContext } from "react-redux";
class App extends React.Component {
  constructor(props){
    super(props)
    console.log('App',this.props)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}
class Header extends React.Component{
  constructor(props) {
    super(props);
    console.log('Header',this.props)
  }
  render() { 
    return(
      <ReactReduxContext.Consumer>
        {({ store }) => {
          console.log('Header in Consumer',store.getState())
          return (
            <header>Header123</header>
          );
        }}
      </ReactReduxContext.Consumer>
    )
  }
}
class Body extends React.Component{
  constructor(props) {
    super(props);
    console.log('Body',this.props)
  }
  render() { 
    // return (
    //   <div>Body</div>
    // );
    return(
      <ReactReduxContext.Consumer>
        {({ store }) => {
          console.log('Body in Consumer',store.getState())
          return (
            <div>Body</div>
          );
        }}
      </ReactReduxContext.Consumer>
    )
  }
}
class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log('Footer',this.props)
  }
  render() { 
    return (
      <footer>Footer</footer>
    );
  }
}



const ADD_DEVICE = 'ADD_DEVICE'
const DELETE_DEVICE = 'DELETE_DEVICE'
const INITIAL_DEVICE = 'INITIAL_DEVICE'
const SET_DEVICE_PROPS = 'SET_DEVICE_PROPS'
const CHANGE_POWER = 'CHANGE_POWER'
const COMMAMD = 'COMMAND'

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
const changeDevicePower = (state, id, power) => {
  let tmp = state.slice();
  return tmp.map(state => {
    if (state.id === id) {
      return {
        ...state,
        power: power
      }
    } else {
      return state
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
/**
 * 初始化裝置列表跟動作
 */
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
/**
 * 提供使用者操作
 */
export const userControl = (state = [], action) => {
  switch (action.type) {
    case SET_DEVICE_PROPS:
      return setDeviceProps(state, action.id, action.info)
    case CHANGE_POWER:
      return changeDevicePower(state, action.id, action.power)
    case COMMAMD:
      return command(state, action)
    default:
      return state
  }
}

export const deviceApp = combineReducers({
  device,
  userControl
});

export default App;
