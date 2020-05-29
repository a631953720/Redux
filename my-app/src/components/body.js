import React from 'react';
import { connect } from "react-redux";

let id=0;
const SubBody =()=>{
    let input=''
    return(
        <div>
            body
        </div>
    )
}
export const Body = connect(
    null,
    null
)(SubBody)

