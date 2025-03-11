import { useEffect, useState, useRef } from 'react';

import { useLocation } from "wouter";

import { Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Tree } from '@mantine/core';
import { ScrollArea, Group } from '@mantine/core';
import { TextInput, FocusTrap } from '@mantine/core';
import { useTree } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import '../styles/pages/Accounts.scss'
import { ArrowLeft, Landmark, ChevronDown, ChevronRight } from 'lucide-react';

import { fakeAccounts } from '../data/FakeData';
import AddAccountModal from '../modals/AddAccountModal';

interface AccountsProps {
    className?: string;
    setBarText: (text: string) => void
}


function Accounts({ className, setBarText }: AccountsProps) {

    const [location, navigate] = useLocation();
    const inputRef = useRef<HTMLInputElement>(null);
    const searchBarIsFocused = useRef(false);
    const tree = useTree();
    const theme = useMantineTheme();
    const [addAccountModalOpened, { open: openAddAccountModal, close: closeAddAccountModal }] = useDisclosure(false);
    const modalOpen = useRef(false);

    const focusSearchBar = (event?: KeyboardEvent) => {
        event?.preventDefault(); // Prevent default key press behavior
        event?.stopPropagation(); // Prevent bubbling if necessary
        inputRef.current?.focus();
    };

    const goBack = () => {
        if (modalOpen.current) {
            modalOpen.current = false;
            return;
        }
        navigate("/");
    }

    const expandAll = () => {
        tree.expandAllNodes();
    }

    const collapseAll = () => {
        tree.collapseAllNodes();
    }

    const addAccount = () => {
        modalOpen.current = true;
        openAddAccountModal();
    }

    useEffect(() => {
        const handleKeyboardEvents = (event: KeyboardEvent) => {

            if (searchBarIsFocused.current) {
                if (event.key === "Escape") {
                    inputRef.current?.blur();
                }
                return;
            }

            if (event.key === "Escape") {
                goBack();
            } else if (event.key === "e") {
                expandAll();
            } else if (event.key === "c") {
                collapseAll();
            } else if (event.key === "f") {
                focusSearchBar(event);
            } else if (event.key === "a") {
                addAccount();
            }
        };

        window.addEventListener("keydown", handleKeyboardEvents);
        return () => {
            window.removeEventListener("keydown", handleKeyboardEvents);
        };
    }, [navigate]);

    useEffect(() => {
        setBarText("[E]xpand, [C]ollapse, [A]dd, [Esc] Back");
    }, [setBarText]);
    

    return (
        <>
            <div className={className + " accountsPage"}>
                <div className="leftPane">
                    <TextInput
                        placeholder="Search"
                        color={theme.colors.themeColors[6]}
                        className='searchInput'
                        onFocus={() => (searchBarIsFocused.current = true)}
                        onBlur={() => (searchBarIsFocused.current = false)}
                        ref={inputRef}
                    />
                    <ScrollArea offsetScrollbars className='accountsList'>
                        <Tree 
                            data={fakeAccounts} 
                            tree={tree}
                            className='accountsTree'
                            renderNode={({ node, expanded, hasChildren, elementProps }) => (
                                <div 
                                    {...elementProps} 
                                    className={elementProps.className + " accountItem"}
                                >
                                    {
                                        hasChildren ? (
                                            expanded ? <ChevronDown className='chevronIcon' /> : <ChevronRight className='chevronIcon' />
                                        ) : (
                                            <div className="emptyIcon" />
                                        )
                                    }

                                    <Landmark className='accountIcon' />
                                    <p className='accountLabel'>{node.label}</p>
                                </div>
                            )}
                            
                        />
                    </ScrollArea >
                </div>
                <div className="rightPane">
                    <Button
                        fullWidth
                        color={theme.colors.themeColors[8]}
                        onClick={() => focusSearchBar()}
                    >
                        Find
                    </Button>
                    <Button
                        fullWidth
                        color={theme.colors.themeColors[8]}
                        onClick={() => expandAll()}
                    >
                        Expand
                    </Button>
                    <Button
                        fullWidth
                        color={theme.colors.themeColors[8]}
                        onClick={() => collapseAll()}
                    >
                        Collapse
                    </Button>
                    <Button
                        fullWidth
                        color={theme.colors.themeColors[8]}
                        onClick={() => addAccount()}
                    >
                        Add Account
                    </Button>
                    <Button
                        fullWidth
                        color={theme.colors.themeColors[8]}
                        className='backButton'
                        onClick={() => goBack()}
                    >
                        <ArrowLeft className='backIcon'/> Back
                    </Button>
                </div>
            </div>
            <AddAccountModal
                opened={addAccountModalOpened}
                onClose={closeAddAccountModal}
            />
        </>
    )
}

export default Accounts