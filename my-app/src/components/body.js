import React from 'react';
import { connect } from "react-redux";
import {changePower,addDevice} from '../redux/actions';
import { device } from '../redux/reducers/device';

let id=0;
const Test=(deviceList)=>{
    
    let list = deviceList.map(device=>{
        let id=0;
        return `id:${device.id} power:${device.power ?'on':'off'}`
    })
    console.log(list);
    return(
        <div>
            {list.map((item,idx)=>(
                <p key={idx}>{item}</p>
            ))}
        </div>
    )
}
class SubBody extends React.Component {
    handleAdd = () =>{
        console.log(this.props.addDevice(id++,true))
    }
    handleChange = () =>{
        console.log(this.props.changePower(0))
    }
    render(){
        console.log(this.props.deviceList);
        const deviceList = this.props.deviceList;
        return(
            <div>
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleChange}>change</button>
                {Test(deviceList)}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    deviceList:state.device
});
export const Body = connect(
    mapStateToProps,
    {changePower,addDevice}
)(SubBody);

