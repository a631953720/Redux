import React from 'react';
import { connect } from "react-redux";
import {addDevice,setDeviceName} from "../redux/actions"
import DeviceCard from "./deviceCard"
class SubBody extends React.Component{
    constructor(props){
        super(props);
        this.id=0;
    }
    addDeviceCard=()=>{
        console.log(this.props.addDevice(this.id++,'123',true));
    }
    setName=()=>{
        const id = Number(this.devId.value);
        const name = this.devName.value;
        console.log(this.props.setDeviceName(id,name));
    }
    render(){
        console.log(this.props.deviceList);
        const {deviceList}=this.props;
        this.devId=''
        this.devName=''
        return(
            <div>
                <button onClick={this.addDeviceCard}>add Device</button>
                <input ref={node => { this.devId = node; }} placeholder='choose device id'></input>
                <input ref={node => { this.devName = node; }} placeholder='set device name'></input>
                <button onClick={this.setName}>set Name</button>
                
                <DeviceCard deviceList={deviceList}/>
            </div>
        )
    }
}
const mapStatToProps=state=>({
    deviceList:state.deviceList
})

export const Body = connect(
    mapStatToProps,
    {addDevice,setDeviceName}
)(SubBody)

