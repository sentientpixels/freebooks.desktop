import { useEffect } from 'react';

import { useLocation } from "wouter";

import { Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

import '../styles/pages/Accounts.scss'
import { ArrowLeft } from 'lucide-react';

interface AccountsProps {
    className?: string;
}

function Accounts({ className }: AccountsProps) {

    const [location, navigate] = useLocation();
    
    const theme = useMantineTheme();

    useEffect(() => {
        const handleKeyboardEvents = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                navigate("/");
            }
        };

        window.addEventListener("keydown", handleKeyboardEvents);
        return () => {
            window.removeEventListener("keydown", handleKeyboardEvents);
        };
    }, [navigate]);

    return (
        <div className={className + " accountsPage"}>
            <div className="leftPane">
                <ul>
                    <li>Account 1</li>
                    <li>Account 2</li>
                    <li>Account 3</li>
                </ul>
            </div>
            <div className="rightPane">
                <Button
                    variant='outline'
                    color={theme.colors.themeColors[6]}
                >
                    <ArrowLeft />
                </Button>
            </div>
        </div>
    )
}

export default Accounts