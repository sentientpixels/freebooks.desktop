
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
        <div className={className + " transactionsList"}>
            <Stack
                gap="1rem"
                style={{
                    marginTop: "1rem",
                    width: "50%"
                }}
            >
                {
                    transactions
                }
            </Stack>
        </div>
    )
}