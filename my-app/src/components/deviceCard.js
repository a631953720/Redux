import React from 'react';

// const List =(deviceList)=>{
//     const list = deviceList.map(_state=>{
//         let id=0;
//         const list = Object.keys(_state).reduce((newArr,key)=>{
//             newArr[id++]=`${key}:${_state[key]}`
//             // newArr.push({[key]:_state[key]})
//             return newArr
//         },[])
//         return list.map((item,idx)=><p key={idx}>{item}</p>)
//     })
//     return list;
// }

export default class Device extends React.Component {

    render() {
        const { deviceList } = this.props;
        return deviceList.map((device, idx) => (
            <div key={idx}>
                <p>id: {device.id}</p>
                <p>name: {device.name}</p>
                <p>power: {device.power ? 'on' : 'off'}</p>
            </div>
        ))
    }
}
