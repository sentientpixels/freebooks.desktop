import {createRoot} from 'react-dom/client'
import App from './App'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';

// mantine
const themeColors: MantineColorsTuple = [
    "#ecfbf1",
    "#dcf2e4",
    "#b8e4c7",
    "#91d5a8",
    "#71c98d",
    "#5cc17c",
    "#50bd73",
    "#40a661",
    "#359455",
    "#268046"
  ];
  
const theme = createTheme({
    colors: {
        themeColors,
    }
});

// react stuff
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <MantineProvider theme={theme}>
        <App/>
    </MantineProvider>
)
