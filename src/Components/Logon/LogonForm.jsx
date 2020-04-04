import React from 'react'
import LogonActions from './LogonActions'
import './Logon.css'

class LogonForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};

        this.goToRegister = this.goToRegister.bind(this);
    }

    submitEventHendler = event => {
        event.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);

        // TODO: check if data correct
        // TODO: redirect

        this.props.parentState(LogonActions["LoggedOn"]);
    }

    inputChangedEventHendler = event =>{
        this.setState({[event.target.name]:event.target.value})
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
                <input id="Password" name="password" value={password} onChange={this.inputChangedEventHendler} type="password" pattern="\w{8}"  className="simpleLogonInput LogonInput " placeholder="Пароль"/>
            </div>   
            <div>
                <button type="submit"  className="SubmitDiv">Войти</button>
            </div>     
        </div>
        </form>);
    }

    goToRegister(e){
        this.props.parentState(LogonActions["RegisterForm"]);
    }
}

export default LogonForm