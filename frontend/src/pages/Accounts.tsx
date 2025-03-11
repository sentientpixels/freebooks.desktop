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
    const closedModal = useRef(false);

    const focusSearchBar = (event?: KeyboardEvent) => {
        event?.preventDefault(); // Prevent default key press behavior
        event?.stopPropagation(); // Prevent bubbling if necessary
        inputRef.current?.focus();
    };

    const goBack = () => {
        if (addAccountModalOpened){
            return;
        }

        if (modalOpen.current) {
            return;
        }

        // when esc is pressed in the modal, it's onclose is called befoe this goBack()
        // :. modalOpen.current always evaluates to false
        // closedModal is a ref that is like a flag to check if the esc keypress was for the modal; it simply returns, 
        // and marks the flag false, so that the next esc event is processed for navigation
        if (closedModal.current) {
            closedModal.current = false;
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

    const closeModal = () => {
        modalOpen.current = false;
        closedModal.current = true;
        closeAddAccountModal();
    }

    useEffect(() => {
        const handleKeyboardEvents = (event: KeyboardEvent) => {

            if (searchBarIsFocused.current) {
                if (event.key === "Escape") {
                    inputRef.current?.blur();
                }
                return;
            }

            if (modalOpen.current) {
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
            <AddAccountModal
                opened={addAccountModalOpened}
                onClose={closeModal}
            />
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
                        onClick={() => focusSearchBar()}
                    >
                        Find
                    </Button>
                    <Button
                        fullWidth
                        onClick={() => expandAll()}
                    >
                        Expand
                    </Button>
                    <Button
                        fullWidth
                        onClick={() => collapseAll()}
                    >
                        Collapse
                    </Button>
                    <Button
                        fullWidth
                        onClick={() => addAccount()}
                    >
                        Add Account
                    </Button>
                    <Button
                        fullWidth
                        className='backButton'
                        onClick={() => goBack()}
                    >
                        <ArrowLeft className='backIcon'/> Back
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Accounts