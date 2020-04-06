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
    this.setState({ authorized: true });
  };

  updateProfile = (profData) => {
    this.setState({ profileData: profData });
    console.log(profData);
    console.log(this.state.profileData);
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          authorized: this.state.authorized,
          profileData: this.state.profileData,
          updateProfile: this.updateProfile,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
