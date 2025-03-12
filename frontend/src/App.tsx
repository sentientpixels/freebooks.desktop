import {useEffect, useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";

import { Route, Switch, useLocation } from "wouter";

import { useMantineTheme } from '@mantine/core';
import { Settings } from 'lucide-react';

import HomePage from './pages/HomePage';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';

import './styles/App.scss'
import '@mantine/dates/styles.css';
import whitelogo from './assets/white_logo.svg'




function App() {

    const theme = useMantineTheme();
    const [barText, setBarText] = useState("[A]ccounts, [T]ransactions");

    const [location, navigate] = useLocation();

    useEffect(() => {
        if (location === "/"){
            setBarText("[A]ccounts, [T]ransactions");
        }
    }, [location]);

    // function greet() {
    //     Greet(name).then(updateResultText);
    // }

    return (
        <div id="App" className="App">

            <div className="header">
                <img src={whitelogo} className='logo' />
                <h1 className='title'>FreeBooks</h1>
                <Settings className='settings'/>
            </div>

            <Switch>
                
                <Route path="/accounts/">
                    <Accounts 
                        className="main"
                        setBarText={setBarText}
                    />
                </Route>

                <Route path="/transactions/">
                    <Transactions 
                        className="main" 
                        setBarText={setBarText}
                    />
                </Route>

                <Route>
                    <HomePage 
                        className="main" 
                    />
                </Route>
                
            </Switch>

            <div className="bottomBar">
                {barText}
            </div>


        </div>
    )
}

export default App
