import './App.css';
import React from 'react'
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react"
import { Routes } from './Routes/Routes';


function App() {
  return (
    <div className="App">
      {/* <AmplifySignOut /> */}
      <Routes />
    </div>
  );
}

export default withAuthenticator(App);
