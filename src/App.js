import './App.css';
import React from 'react';
import CustomTabs from './CustomTabs';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function App() {

  return (
    <div className="App">
      <div className="Headstyle">
        <h1 className="Header" >428 Virtual And Mixed Reality</h1>
        <h1 className="Header" > <em> Karthik Singh</em></h1>
      </div>
      <br />
      <body>
        <CustomTabs />
      </body>
    </div>
  );
}

export default App;
