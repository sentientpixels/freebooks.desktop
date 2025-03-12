import { Combobox, TextInput, useCombobox } from "@mantine/core";
import { useState } from "react";

import { parentAccounts } from '../data/FakeData';

interface AccountComboBoxProps {
    onItemSelected: (item: string) => void;
}

export default function AccountComboBox({ onItemSelected }: AccountComboBoxProps) {

    const [parentAccountValue, setParentAccountValue] = useState<string>('');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const shouldFilterOptions = !parentAccounts.some((item) => item === parentAccountValue);
    const filteredOptions = shouldFilterOptions
        ? parentAccounts.filter((item) => item.toLowerCase().includes(parentAccountValue.toLowerCase().trim()))
        : parentAccounts;

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <Combobox
            onOptionSubmit={(optionValue) => {
                setParentAccountValue(optionValue);
                combobox.closeDropdown();
            }}
            store={combobox}
        >
            <Combobox.Target>
                <TextInput
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
    )
}