import { Divider, Group, SegmentedControl, Stack, TextInput } from "@mantine/core"
import { DateInput } from '@mantine/dates';
import { useState } from "react";
import AccountComboBox from "./AccountComboBox";

interface FiltersProps {
    className?: string
}

export default function Filters({ className }: FiltersProps) {

    const [rangetype, setRangeType] = useState('Range');
    const [fromDate, setFromDate] = useState<Date | null>(null);
    const [toDate, setToDate] = useState<Date | null>(null);
    const [sinceDate, setSinceDate] = useState<Date | null>(null);

    return (
        <Stack 
            className={className + " filters"}
            align="flex-start"
        >
            <SegmentedControl
                value={rangetype}
                onChange={setRangeType}
                data = {
                    [
                        'Range',
                        'Past'
                    ]
                }
            />

            
            {
                rangetype === 'Range' ?
                    <Stack>
                        <DateInput
                            value={fromDate}
                            onChange={setFromDate}
                            placeholder="From"
                            valueFormat="DD/MM/YYYY"
                            label="From (DD/MM/YYYY)"
                        />
                        <DateInput
                            value={toDate}
                            onChange={setToDate}
                            placeholder="To"
                            valueFormat="DD/MM/YYYY"
                            label="To (DD/MM/YYYY)"
                        />
                    </Stack>
                :
                    <Stack>
                        <DateInput 
                            value={sinceDate}
                            onChange={setSinceDate}
                            placeholder="Since"
                            valueFormat="DD/MM/YYYY"
                            label="Since (DD/MM/YYYY)"
                        />
                    </Stack>
                
            }

            <Divider
                my="md"
                color="#4a4a4a"
            />


            <Group>
                <AccountComboBox onItemSelected={() => {}} />
                <TextInput
                    placeholder=">"
                />
                <TextInput
                    placeholder="Amount"
                />
                <TextInput
                    placeholder="Currency"
                />
            </Group>
            <Group>
                <AccountComboBox onItemSelected={() => {}} />
                <TextInput
                    placeholder=">"
                />
                <TextInput
                    placeholder="Amount"
                />
                <TextInput
                    placeholder="Currency"
                />
            </Group>
            <Group>
                <AccountComboBox onItemSelected={() => {}} />
                <TextInput
                    placeholder=">"
                />
                <TextInput
                    placeholder="Amount"
                />
                <TextInput
                    placeholder="Currency"
                />
            </Group>


        </Stack>
    )
}