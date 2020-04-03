import React from 'react'
import './Logon.css'

class LogonForm extends React.Component{
    render(){
        return (<div className="LogonForm">
        <label>Lopgin</label>
            <input id="name" type="text" className="simpleLogonInput"/>
        </div>);
    }
}

export default LogonForm