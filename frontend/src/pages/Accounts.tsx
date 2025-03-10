import { useEffect } from 'react';

import { useLocation } from "wouter";

interface AccountsProps {
    className?: string;
}

function Accounts({ className }: AccountsProps) {

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
            <h1>Accounts</h1>
        </div>
    )
}

export default Accounts