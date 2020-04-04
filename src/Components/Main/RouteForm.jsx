import React from 'react'
import RouteFillProfileSubForm from './RouteFillProfileSubForm'
import RouteSelectedRoutSubForm from './RouteSelectRoutSubForm'
import './Main.css'
class RouteForm extends React.Component{
    state = { isProfileDataExists : this.props.profileFilled }

    render(){
        return <>{this.buildFormDOM()}</>
    }

    buildFormDOM(){
        return this.state.isProfileDataExists === 0 ? <RouteFillProfileSubForm fillProfile={this.profileChanged} />: <RouteSelectedRoutSubForm />
    }

    profileChanged = () => {
        this.props.fillProfile();
        this.setState({isProfileDataExists : 1});
    }
}

export default RouteForm;