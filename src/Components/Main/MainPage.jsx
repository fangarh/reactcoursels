import React from 'react'
import NavigationMenu from './Navigation'
import NavigationActions from '../NavigationActions'
import ProfilePage from './ProfilePage'
import MapForm from './MapForm'
import AppPages from '../../AppPages'

class MainPage extends React.Component{
    state = {activePage: NavigationActions["TaxiForm"]}
    render(){        
        return <>{this.buildFormDOM()}</>;
    }

    buildFormDOM(){        
        return (<>
            <NavigationMenu controllActions={this.navigatorActions}/>
            
            {this.state.activePage === NavigationActions["ProfileForm"] ? <ProfilePage controllActions={this.navigatorActions}/> : <MapForm />}
        </>);
    }

    navigatorActions = navigateActions => {
        // TODO: send navigate message to parent form
        if(navigateActions !== NavigationActions["TaxiForm"] && navigateActions !== NavigationActions["ProfileForm"])
            this.props.updateAppState(AppPages["Logon"]);
        else
            this.setState({activePage: navigateActions})
    }
}

export default MainPage;