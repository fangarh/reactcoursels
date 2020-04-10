import React from "react";
import ProfileData from "../BuisnessObjects/ProfileData";

export const AuthContext = React.createContext({});

export class AuthProvider extends React.Component {
  state = { authorized: false, profileData: new ProfileData() };

  login = (email, password) => {
    if (!email || !password) return;

    // TODO: Do authorize
    console.log("AC", email, password);
    this.setState({ authorized: true });
  };

  logout = () => {
    // TODO: Do authorize
    this.setState({ authorized: false, profileData: new ProfileData() });
  };

  updateProfile = (profileData) => this.setState({ profileData });

  buildProviderParams = () => {
    const { authorized, profileData } = this.state;
    return {
      authorized,
      profileData,
      updateProfile: this.updateProfile,
      login: this.login,
      logout: this.logout,
    };
  };

  render() {
    return (
      <AuthContext.Provider value={this.buildProviderParams()}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
