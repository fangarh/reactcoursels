import React from 'react'
import './Logon.css'

class LogonForm extends React.Component{
    render(){
        return (<div className="LogonForm">
            <div className="LogonInputBlock">
                <label>Login</label>
                <input id="name" type="text" className="simpleLogonInput"/>
            </div>
            <div className="LogonInputBlock">
                <label>Password</label>
                <input id="name" type="text" className="simpleLogonInput"/>
            </div>
            <div className="LogonInputBlock">
                <p>For register press <a href="~">here</a></p>
            </div>            
        </div>);
    }
}

export default LogonForm