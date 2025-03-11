import { useEffect } from 'react';

import { useLocation } from "wouter";

interface TransactionsProps {
    className?: string,
    setBarText: (text: string) => void
}

function Transactions({ className, setBarText }: TransactionsProps) {

    const [location, navigate] = useLocation();

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
        <div className={className}>
            <h1>Transactions</h1>
        </div>
    )
}

export default Transactions