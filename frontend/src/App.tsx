import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";

import { useMantineTheme } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

import './styles/App.scss'
import whitelogo from './assets/white_logo.svg'




function App() {

    const theme = useMantineTheme();

    // function greet() {
    //     Greet(name).then(updateResultText);
    // }

    return (
        <div id="App" className="App">
            <div className="header">
                <img src={whitelogo} className='logo' />
                <h1 className='title'>FreeBooks</h1>
                <FontAwesomeIcon icon={faGear} className='settings' />
            </div>
        </div>
    )
}

export default App
