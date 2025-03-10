import { useEffect } from 'react';

import { Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useLocation } from "wouter";

import '../styles/panes/HomeButtons.scss'

interface HomeButtonsProps {
    className: string
}

function HomeButtons({ className }: HomeButtonsProps) {

    const [location, navigate] = useLocation();
    const theme = useMantineTheme();

    const handleAccountsClick = () => {
        navigate("/accounts/")
    }

    const handleTransactionsClick = () => {
        navigate("/accounts/")
    }


    useEffect(() => {
        const handleKeyboardEvents = (event: KeyboardEvent) => {
            if (event.key === "a") {
                navigate("/accounts/");
            }
            if (event.key == "t"){
                navigate("/transactions/");
            }
        };

        window.addEventListener("keydown", handleKeyboardEvents);
        return () => {
            window.removeEventListener("keydown", handleKeyboardEvents);
        };
    }, [navigate]);


    return (
        <div 
            className={className + " homeButtons"}
        >
            <Button 
                fullWidth 
                color={theme.colors.themeColors[8]}
                onClick={handleAccountsClick}
            >
                Accounts
            </Button>

            <Button 
                fullWidth 
                color={theme.colors.themeColors[8]}
                onClick={handleTransactionsClick}
            >
                Transactions
            </Button>

        </div>
    );
}

export default HomeButtons