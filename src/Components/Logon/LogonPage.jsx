import React from 'react'
import AppPages from './../../AppPages'
import LogonForm from './LogonForm'
import RegisterForm from './RegisterForm'
import LogonActions from './LogonActions'
import './Logon.css'

class LogonPage extends React.Component{
    constructor(props){
        super(props);

        this.setNewState = this.setNewState.bind(this);
    }
    state = {userAction : LogonActions["LogonForm"]};

    render(){        
        switch (this.state.userAction){
            case LogonActions["LogonForm"]:
                return <div className="LogonPage"><LogonForm parentState={this.setNewState} /></div>;
            case LogonActions["RegisterForm"]:
                return <div className="LogonPage"><RegisterForm parentState={this.setNewState} /></div>;
            default: return null;           
        }
    }

    setNewState(newState){
        if(newState === 2)
        {
            this.props.updateAppState(AppPages["Taxi"]);
        }else
            this.setState({userAction : newState})
    }
}

export default LogonPage; 