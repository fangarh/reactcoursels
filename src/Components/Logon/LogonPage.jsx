import React from 'react'
import LogonForm from './LogonForm'
import RegisterForm from './RegisterForm'
import './Logon.css'

class LogonPage extends React.Component{
    state = {userAction : 1};

    render(){
        return <div className="LogonPage">
            {this.state.userAction === 0 ? <LogonForm /> : <RegisterForm /> }
        </div>;
    }
}

export default LogonPage; 