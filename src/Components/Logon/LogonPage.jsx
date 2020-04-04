import React from 'react'
import AppPages from './../../AppPages'
import LogonForm from './LogonForm'
import RegisterForm from './RegisterForm'
import NavigationActions from '../NavigationActions'
import './Logon.css'

class LogonPage extends React.Component{
    state = {userAction : NavigationActions["LogonForm"]};

    render(){        
        return <>{this.buildContentDOM()}</>
    }

    buildContentDOM(){
        switch (this.state.userAction){
            case NavigationActions["LogonForm"]:
                return <div className="LogonPage"><LogonForm parentState={this.setNewState} /></div>;
            case NavigationActions["RegisterForm"]:
                return <div className="LogonPage"><RegisterForm parentState={this.setNewState} /></div>;
            default: return null;           
        }
    }

    setNewState = newState => {
        if(newState === 2)
        {
            this.props.updateAppState(AppPages["Taxi"]);
        }else
            this.setState({userAction : newState})
    }
}

export default LogonPage; 