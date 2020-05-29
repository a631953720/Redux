import React from 'react';
import { ReactReduxContext, connect } from "react-redux";
import {addDevice} from '../redux/actions';
import {DeviceList} from './deviceList';

let id=0;
const SubBody =({
    deviceList,
    addDevice
})=>{
    let input=''
    return(
        <div>
            <input
                type='text'
                placeholder="裝置名稱"
                ref={node => { input = node; }}
            />
            <button onClick={() => { addDevice(id++, input.value,true); input.value = '';}}>+++</button>
            {id}
            <DeviceList deviceList={deviceList}/>
        </div>
    )
}
// 等同addDevice
// const mapDispatchToProps = dispatch => ({
//     addDevice: (id, name, power) => {
//         dispatch({
//             type: 'ADD_DEVICE',
//             id: id,
//             deviceName: name,
//             power: power
//         })
//     }
// })
const mapStateToProps=state =>({
    deviceList:state.device
})
export const Body = connect(
    mapStateToProps,
    // {addDevice}//等同mapDispatchToProps
    {addDevice}
)(SubBody)

