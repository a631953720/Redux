import React from 'react';
import { ReactReduxContext, connect } from "react-redux";
function SubBody({
    callback
}) {
    console.log(callback)
    let id = 0;
    return (
        <ReactReduxContext.Consumer>
            {({ store }) => {
                console.log('Body in Consumer', store.getState())
                let input;
                return (
                    <div>
                        <p>Body</p>
                        <input
                            type='text'
                            placeholder="裝置名稱"
                            ref={node => { input = node; }}
                        />
                        <button onClick={() => { callback(id++, input.value, true); input.value = ''; console.log(store.getState()) }}>+++</button>
                    </div>
                );
            }}
        </ReactReduxContext.Consumer>
    )
}
const mapDispatchToProps = dispatch => ({
    callback: (id, name, power) => {
        dispatch({
            type: 'ADD_DEVICE',
            id: id,
            deviceName: name,
            power: power
        })
    }
})
export const Body = connect(
    null,
    mapDispatchToProps
)(SubBody)