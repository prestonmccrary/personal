import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
  }
})


ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
);

