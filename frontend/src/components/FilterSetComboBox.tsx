import { Combobox, TextInput, useCombobox } from "@mantine/core";
import { useState } from "react";
import { filterSets } from "../data/FakeData";

interface FilterSetComboBoxProps {
    onItemSelected: (item: string) => void;
}

export default function FilterSetComboBox({ onItemSelected }: FilterSetComboBoxProps) {
    const [inputValue, setInputValue] = useState("");
    const [selectedItem, setSelectedItem] = useState<null | { name: string }>(null);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const filteredOptions = filterSets.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item.name} key={item.name}>
            {item.name}
        </Combobox.Option>
    ));

    return (
        <Combobox
            onOptionSubmit={(optionValue) => {
                const item = filterSets.find((i) => i.name === optionValue);
                if (item) {
                    setSelectedItem(item);
                    setInputValue(item.name);
                    onItemSelected(item.name);
                }
                combobox.closeDropdown();
            }}
            store={combobox}
        >
            <Combobox.Target>
                <TextInput
                    placeholder="Account..."
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.currentTarget.value);
                        combobox.openDropdown();
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => combobox.closeDropdown()}
                    label="Select Filter Set"
                    description="Select a saved filter set"
                />
            </Combobox.Target>
            
            <Combobox.Dropdown>
                <Combobox.Options mah={200} style={{ overflowY: "auto" }}>
                    {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}