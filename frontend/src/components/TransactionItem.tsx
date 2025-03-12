import { Paper, Stack, Table, Text } from "@mantine/core"

interface Transaction {
    id: number,
    date: string,
    note: string,
    entries: {
        account: {
            id: number,
            name: string
        },
        amount: number,
        unit: string
    }[]
}

interface TransactionItemProps {
    className?: string,
    transaction: Transaction
}

export default function TransactionItem({ className, transaction }: TransactionItemProps) {

    const entries = transaction.entries.map((entry) => {
        return (
            <Table.Tr 
                key={entry.account.id}
                style={{
                    backgroundColor: entry.amount < 0 ? "rgba(239, 68, 68, 0.1)" : "rgba(99, 192, 112, 0.1)"
                }}
            >
                <Table.Td>{entry.account.name}</Table.Td>
                <Table.Td>{entry.amount}</Table.Td>
                <Table.Td>{entry.unit}</Table.Td>
            </Table.Tr>
        )
    })

    return (
        <Paper
            className={className + " transactionsList"}
            style={{
                padding: "1rem"
            }}
        >
            <Stack 
                gap="0"
            >
                <Text>{transaction.date}</Text>
                <Text c="dimmed">{transaction.note}</Text>
                <Table 
                    withTableBorder 
                    withColumnBorders
                    style={{
                        marginTop: "4px"
                    }}
                >
                    <Table.Thead>
                        <Table.Tr
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.06)"
                            }}
                        >
                            <Table.Th>Account</Table.Th>
                            <Table.Th>Amount</Table.Th>
                            <Table.Th>Unit</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {entries}
                    </Table.Tbody>
                </Table>
            </Stack>
        </Paper>
    )
}