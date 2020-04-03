import React from 'react'
import './Logon.css'

const labelBlockStyle = {
    marginBottom:"10px"
};

class LogonForm extends React.Component{
    constructor(props){
        super(props);

        this.goToRegister = this.goToRegister.bind(this);
    }

    render(){
        return (
        <form>
        <div className="LogonForm">
            <div className="LogonInputBlock">
                <h1>Вход</h1>
            </div>
            <div className="LogonInputBlock" style={labelBlockStyle}>
                <label>Новый пользователь?</label><label className="RegButton" onClick={this.goToRegister}>Зарегистрируйтесь!</label>
            </div>
            <div className="LogonInputBlock LogonInput-underline">
                
                <input id="name" type="text" className="simpleLogonInput LogonInput " placeholder="Имя пользователя"/>
            </div>
            <div className="LogonInputBlock  LogonInput-underline">
                <input id="Password" type="text" className="simpleLogonInput LogonInput " placeholder="Пароль"/>
            </div>   
            <div>
                <button type="submit"  className="SubmitDiv">Войти</button>
            </div>     
        </div>
        </form>);
    }

    goToRegister(e){
        console.log("00");
        
        console.log("01");
        this.props.parentState(1);
    }
}

export default LogonForm