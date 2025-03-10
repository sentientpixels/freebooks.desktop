import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";

import { Route, Switch } from "wouter";

import { useMantineTheme } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

import HomePage from './pages/HomePage';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';

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

            <Switch>
                
                <Route path="/accounts/">
                    <Accounts className="main" />
                </Route>

                <Route path="/transactions/">
                    <Transactions className="main" />
                </Route>

                <Route>
                    <HomePage className="main" />
                </Route>
                
            </Switch>

            <div className="bottomBar">
                [A]ccounts, [T]ransactions
            </div>


        </div>
    )
}

export default App
