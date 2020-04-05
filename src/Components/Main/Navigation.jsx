import React from 'react'
import './Navigation.css'
import NavigationActions from '../NavigationActions'

class NavigationMenu extends React.Component{
    menuItemClick = e =>{
        switch(e.target.id){
            case 'map':
                this.props.controllActions(NavigationActions["TaxiForm"]);
                break;
            case 'profile':
                this.props.controllActions(NavigationActions["ProfileForm"]);
                break;
            case 'exit':
                this.props.controllActions(NavigationActions["LogonForm"]);
                break;                                    
            default:
                return;
        }
    }

    render(){
        return <nav>
            <ul  className="topmenu">
                <li><label id='map' onClick={this.menuItemClick}>Карта</label></li>
                <li><label id='profile' onClick={this.menuItemClick}>Профиль</label></li>
                <li><label id='exit' onClick={this.menuItemClick}>Выйти</label></li>
            </ul>
        </nav>
    }
}

export default NavigationMenu