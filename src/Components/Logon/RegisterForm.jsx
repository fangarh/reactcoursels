import React from 'react'
import './Logon.css'

const divInline = {
    display: 'inline-block'
}

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {user: '', password: '', firstname: '', lastname: ''};

        this.goToLogon = this.goToLogon.bind(this);
    }    

    submitEventHendler = event => {
        event.preventDefault();

        console.log(this.state.user);        
        console.log(this.state.password);

        console.log(this.state.firstname);
        console.log(this.state.lastname);

        // TODO: check if data correct
        // TODO: redirect
    }

    inputChangedEventHendler = event =>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        const {user, password, firstname, lastname} = this.state;

        return (
        <form onSubmit={this.submitEventHendler}>
        <div className="RegisterForm">
            <div className="LogonInputBlock">
                <h1>Регистрация</h1>
            </div>
            <div className="LogonInputBlock labelBlockStyle" >
                <label>Уже зарегистрированы?</label><label className="RegButton" onClick={this.goToLogon}>Вход!</label>
            </div>
            <div className="LogonInputBlock LogonInput-underline">
                
                <input id="name" name="user" value={user} type="text" onChange={this.inputChangedEventHendler} className="simpleLogonInput LogonInput " placeholder="email"/>
            </div>
            <div style={divInline}>
                <div className="LogonInputBlock LogonInput-underline"  style={divInline}>
                    <input id="firstname" name="firstname" value={firstname} type="text" onChange={this.inputChangedEventHendler} className="simpleLogonInput LogonInput " placeholder="Имя"/>
                </div>
                <div className="LogonInputBlock LogonInput-underline"  style={divInline}>
                    <input id="lastname" name="lastname" value={lastname} type="text" onChange={this.inputChangedEventHendler} className="simpleLogonInput LogonInput " placeholder="Фамилия"/>
                </div>
            </div>
            <div className="LogonInputBlock  LogonInput-underline">
                <input id="Password" name="password" value={password} onChange={this.inputChangedEventHendler} type="text" className="simpleLogonInput LogonInput " placeholder="Пароль"/>
            </div>   
            <div>
                <button type="submit"  className="SubmitDiv">Регистрация</button>
            </div>     
        </div>
        </form>);
    }

    goToLogon(e){
        this.props.parentState(0);
    }
}

export default RegisterForm