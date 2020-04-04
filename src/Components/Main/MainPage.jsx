import React from 'react'
import NavigationMenu from './Navigation'

import MapForm from './MapForm'

class MainPage extends React.Component{
    constructor (prop){
        super(prop);

        this.navigatorActions = this.navigatorActions.bind(this);
    }

    render(){        
        return (<>
                <NavigationMenu controllActions={this.navigatorActions}/>
                
                <MapForm/>
            </>);
    }

    navigatorActions(actions){

    }
}

export default MainPage;