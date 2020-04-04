import React from 'react';

import AppPages from './AppPages'
import LogonForm from './Components/Logon/LogonPage'
import MainPage from './Components/Main/MainPage'
import ProfilePage from './Components/UserProfile/ProfilePage'

class App extends React.Component{
  constructor(){
      super();

      this.state = { curPage: AppPages["Logon"]}
      this.updateStateData = this.updateStateData.bind(this);
  }
  
  render(){
    switch(this.state.curPage){
      case AppPages["Logon"]:
        return <LogonForm updateAppState={this.updateStateData}/>;
      case AppPages["Taxi"]:
        return <MainPage updateAppState={this.updateStateData}/>;
      case AppPages["Properties"]:
        return <ProfilePage updateAppState={this.updateStateData}/>;
      default:
        return null;
    }
  }

  updateStateData(page){
    this.setState({curPage: page});
  }
}

export default App;
