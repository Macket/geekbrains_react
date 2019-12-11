import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout'

ReactDOM.render(
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>,
   document.getElementById('root'),
);