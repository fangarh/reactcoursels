import React from 'react';
import './Main.css'

class RouteFillProfileSubForm extends React.Component{
    render(){
        return <div className="RouteForm">need fill profile
            <input type='button' onClick={this.goToFillForm}></input>
        </div>
    }

    goToFillForm = e => {
        console.log(1);
        this.props.fillProfile();
    }
}

export default RouteFillProfileSubForm;