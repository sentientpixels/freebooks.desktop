import {createRoot} from 'react-dom/client'
import App from './App'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';

// mantine
const themeColors: MantineColorsTuple = [
    "#e7fdef",
    "#d6f6e1",
    "#afebc3",
    "#84dfa3",
    "#61d587",
    "#4acf76",
    "#3ccc6c",
    "#2cb45b",
    "#21a04f",
    "#0b8b41"
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
