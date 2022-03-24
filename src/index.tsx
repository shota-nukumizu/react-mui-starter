import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Album from './Album';
import theme from './theme';
import { Route, BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);

// Router Setting
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route path="/" element={App} />
        <Route path="/album" element={Album} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);