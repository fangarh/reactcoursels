import React from 'react'
import NavigationMenu from './Navigation'

import MapForm from './MapForm'

class MainPage extends React.Component{
    render(){        
        return (<>
                <NavigationMenu controllActions={this.navigatorActions}/>
                
                <MapForm/>
            </>);
    }

    navigatorActions = actions => {
        // TODO: send navigate message to parent form
    }
}

export default MainPage;