import { Button, Collapse, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

import { useLocation } from "wouter";

import "../styles/pages/Transactions.scss"
import Filters from '../components/Filters';
import TransactionsList from '../components/TransactionsList';

interface TransactionsProps {
    className?: string,
    setBarText: (text: string) => void
}

function Transactions({ className, setBarText }: TransactionsProps) {

    const [location, navigate] = useLocation();
    const [filtersOpened, {toggle: toggleFilters}] = useDisclosure(false);

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
        <Group 
            className={className + " transactionsPage"}
            align='flex-start'
            style={{
                width: "100%",
            }}
        >
            <TransactionsList />
            <Filters />
        </Group>
    )
}

export default Transactions