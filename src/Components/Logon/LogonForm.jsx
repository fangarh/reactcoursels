import React from 'react'
import NavigationActions from '../NavigationActions'
import './Logon.css'

class LogonForm extends React.Component{
    state = {email: '', password: ''};

    submitEventHendler = event => {
        event.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);

        // TODO: check if data correct
        // TODO: redirect

        this.props.parentState(NavigationActions["LoggedOn"]);
    }

    inputChangedEventHendler = event =>{
        this.setState({[event.target.name]:event.target.value})
    }

    goToRegister = e => {
        this.props.parentState(NavigationActions["RegisterForm"]);
    }

    render(){
        const { email , password } = this.state;
        return (
        <form onSubmit={this.submitEventHendler}>
        <div className="LogonForm">
            <div className="LogonInputBlock">
                <h1>Вход</h1>
            </div>
            <div className="LogonInputBlock labelBlockStyle">
                <label>Новый пользователь?</label><label className="RegButton" onClick={this.goToRegister}>Зарегистрируйтесь!</label>
            </div>
            <div className="LogonInputBlock LogonInput-underline">
                
                <input id="name" name="email" value={email} type="text" onChange={this.inputChangedEventHendler} className="simpleLogonInput LogonInput " placeholder="e-mail"/>
            </div>
            <div className="LogonInputBlock  LogonInput-underline">
                <input id="Password" name="password" value={password} onChange={this.inputChangedEventHendler} type="password" className="simpleLogonInput LogonInput " placeholder="Пароль"/>
            </div>   
            <div>
                <button type="submit"  className="SubmitDiv">Войти</button>
            </div>     
        </div>
        </form>);
    }
}

export default LogonForm