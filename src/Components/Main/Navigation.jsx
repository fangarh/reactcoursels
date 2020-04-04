import React from 'react'
import './Navigation.css'

class NavigationMenu extends React.Component{
    render(){
        return <nav>
            <ul  className="topmenu">
                <li><label>Карта</label></li>
                <li><label>Профиль</label></li>
                <li><label>Выйти</label></li>
            </ul>
        </nav>
    }
}

export default NavigationMenu