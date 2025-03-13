import { Fieldset, Group, Stack, TextInput } from "@mantine/core";
import AccountComboBox from "./AccountComboBox";

export function FilterByAccount() {
    return (
        <Fieldset 
            legend="Account Filter"
        >
            <Stack>
                <AccountComboBox onItemSelected={() => {}} />

                <Group>
                    <TextInput
                        placeholder=">"
                        style={{
                            flex: 1
                        }}
                    />
                    <TextInput
                        placeholder="Amount"
                        style={{
                            flex: 5
                        }}
                    />
                </Group>

                <TextInput
                    placeholder="Unit"
                />
            </Stack>
        </Fieldset>
    )
}