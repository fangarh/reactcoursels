import React from 'react';

import LogonForm from './Components/LogonForm'


import Background from "./images/Lofttaxi.png";

var sectionStyle = {
  backgroundSize: "cover",

  backgroundPosition: "center center", 
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <div style={sectionStyle}>
      <LogonForm />
    </div>
  );
}

export default App;
