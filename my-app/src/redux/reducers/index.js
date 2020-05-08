import { combineReducers } from "redux";
import {device} from './device';
import {userControl} from './userControl';
export default combineReducers({ device, userControl });
