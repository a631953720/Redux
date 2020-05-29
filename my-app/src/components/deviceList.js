import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {deleteDevice,initialDeviceList,changePower} from '../redux/actions';
const Test=(info)=>{
    let id=0;
    let newArr = Object.keys(info).reduce(
        (newArr,key)=>{
            newArr[id++]=`${key}:${info[key]}`
            return newArr
        },
        []
    )
    console.log(newArr);
    return(
        <div>
            {newArr.map((item,idx)=>(
                <p key={idx}>{item}</p>
            ))}
        </div>
    )
}
class List extends React.Component{
    constructor(props) {
        super(props); 
    }
    handleDeleteBtn=(e)=>{
        const id = Number(e.target.name);
        console.log(this.props.deleteDevice(id))
    }
    handleSetDevice=(e)=>{
        const id = Number(e.target.name);
        console.log(this.props.initialDeviceList(id,{'出廠年份':'2020','出廠日期':'9/1'}))
        console.log(this.props.dispatch({type:"CHANGE_POWER",id:Number(0),power:undefined}))
    }
    handleChangePower=(e)=>{
        const id = Number(e.target.name);
        console.log(this.props.changePower(id));
        this.forceUpdate();
    }
    render(){
        let {deviceList}=this.props
        return(
            <div>
                {console.log(deviceList)}
                {deviceList.map(device=>(
                    <div key={device.id}>
                        <p>ID: {device.id}</p>
                        <p>Name: {device.deviceName}</p>
                        <p>Power: {device.power?'on':'off'}</p>
                        {device.info ? Test(device.info) : ''}
                        <button name={device.id} onClick={this.handleChangePower}>切換開關</button>
                        <button name={device.id} onClick={this.handleSetDevice}>初始化</button>
                        <button name={device.id} onClick={this.handleDeleteBtn}>刪除</button>
                    </div>
                ))}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch,
        ...bindActionCreators({deleteDevice,initialDeviceList,changePower},dispatch)
    }
}

export const DeviceList = connect(
    null,
    mapDispatchToProps
)(List)
// export const DeviceList = connect(
//     null,
//     {deleteDevice,initialDeviceList,changePower}
// )(List)