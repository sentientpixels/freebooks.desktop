
import { Stack } from "@mantine/core"
import { fakeTransactions } from "../data/FakeData"
import TransactionItem from "./TransactionItem"

interface TransactionsListProps {
    className?: string
}

export default function TransactionsList({ className }: TransactionsListProps) {

    const transactions = fakeTransactions.map((transaction) => {
        return (
            <TransactionItem 
                className="transactionItem" 
                key={transaction.id} 
                transaction={transaction}
            />
        )
    })

    return (
        <Stack
            gap="1rem"
            style={{
                flex: 3
            }}
        >
            {
                transactions
            }
        </Stack>
    )
}