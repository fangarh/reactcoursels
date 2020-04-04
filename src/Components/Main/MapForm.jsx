import React from 'react'
import RouteForm from './RouteForm'
import './Main.css'

class MapForm extends React.Component{
    state = {isProfileFilled: 0};

    render(){
        return <div className="MainPage">
            <RouteForm fillProfile = {this.profileFilled} profileFilled = {this.state.isProfileFilled}/>
        Map</div>;
    }

    componentDidMount(){
        // Hear we will check if profile exists. In test we will think it not exist
        this.setState({isProfileFilled: 0});
    }

    profileFilled = () => {
        this.setState({isProfileFilled: 1});
    }
}

export default MapForm;