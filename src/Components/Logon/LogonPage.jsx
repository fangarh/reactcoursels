import React from 'react'
import LogonForm from './LogonForm'
import RegisterForm from './RegisterForm'
import './Logon.css'

class LogonPage extends React.Component{
    constructor(){
        super();
        
        this.setNewState = this.setNewState.bind(this);
    }
    state = {userAction : 0};

    render(){
        return <div className="LogonPage">
            {this.state.userAction === 0 ? <LogonForm parentState={this.setNewState} /> : <RegisterForm /> }
        </div>; 
    }

    setNewState(newState){
        console.log("1");
        this.setState({userAction : newState})
    }
}

export default LogonPage; 