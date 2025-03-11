import { useState, useEffect } from 'react';
import {
    Modal,
    Button,
    Text,
    useMantineTheme,
    TextInput,
    Combobox,
    useCombobox,
    Stack
} from '@mantine/core';

import '../styles/modals/AddAccountModal.scss';
import { parentAccounts } from '../data/FakeData';

interface AddAccountModalProps {
    opened: boolean,
    onClose: () => void
}

function AddAccountModal({ opened, onClose }: AddAccountModalProps) {
    const theme = useMantineTheme();
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });
    const [parentAccountValue, setParentAccountValue] = useState<string>('');
    const shouldFilterOptions = !parentAccounts.some((item) => item === parentAccountValue);
    const filteredOptions = shouldFilterOptions
        ? parentAccounts.filter((item) => item.toLowerCase().includes(parentAccountValue.toLowerCase().trim()))
        : parentAccounts;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    useEffect(() => {
        combobox.selectFirstOption();
    }, [parentAccountValue]);

    return (
        <Modal 
            opened={opened} 
            onClose={onClose} 
            title="Add Account" centered
            className='addAccountModal'
        >


            <Stack
                gap="1rem"
            >

                <TextInput
                    placeholder="Account Name"
                    label="Account Name"
                />




                <Combobox
                    onOptionSubmit={(optionValue) => {
                        setParentAccountValue(optionValue);
                        combobox.closeDropdown();
                    }}
                    store={combobox}
                >
                    <Combobox.Target>
                        <TextInput
                            label="Parent Account"
                            placeholder="Pick or type to search"
                            value={parentAccountValue}
                            onChange={(event) => {
                                setParentAccountValue(event.currentTarget.value);
                                combobox.openDropdown();
                            }}
                            onClick={() => combobox.openDropdown()}
                            onFocus={() => combobox.openDropdown()}
                            onBlur={() => combobox.closeDropdown()}
                        />
                    </Combobox.Target>
                    
                    <Combobox.Dropdown>
                        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
                            {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
                        </Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>

                
                <TextInput
                    placeholder="Currency"
                    label="Currency"
                />



                <Button
                    variant="outline"
                >
                    Add
                </Button>
            </Stack>




        </Modal>
    );
}

export default AddAccountModal;
