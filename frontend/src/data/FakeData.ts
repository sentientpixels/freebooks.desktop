import { TreeNodeData } from '@mantine/core';

export const fakeAccounts: TreeNodeData[] = [
    {
        value: 'Assets',
        label: 'Assets',
        children: [
            {
                value: 'Cash',
                label: 'Cash'
            },
            {
                value: 'Bank',
                label: 'Bank'
            }
        ]

    },
    {
        value: 'Liabilities',
        label: 'Liabilities',
        children: [
            {
                value: 'Debt',
                label: 'Debt'
            },
            {
                value: 'Loan',
                label: 'Loan'
            },
            {
                value: 'Credit Card',
                label: 'Credit Card'
            }
        ]
    },
    {
        value: 'Equity',
        label: 'Equity',
        children: [
            {
                value: 'Opening Balance',
                label: 'Opening Balance'
            }
        ]
    },
    {
        value: 'Income',
        label: 'Income',
        children: [
            {
                value: 'Salary',
                label: 'Salary',
                children: [
                    {
                        value: 'Job 1',
                        label: 'Job 1'
                    },
                    {
                        value: 'Job 2',
                        label: 'Job 2'
                    },
                    {
                        value: 'Job 3',
                        label: 'Job 3'
                    },
                    {
                        value: 'Job 4',
                        label: 'Job 4'
                    },
                    {
                        value: 'Job 5',
                        label: 'Job 5'
                    },
                    {
                        value: 'Job 6',
                        label: 'Job 6'
                    }
                ]
            },
            {
                value: 'Interest',
                label: 'Interest'
            }
        ]
    }
]

export const fakeTransactions = [
    {
        id: 1,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -1000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 1000,
                unit: "$"
            }
        ]
    },
    {
        id: 2,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -2000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 2000,
                unit: "$"
            }
        ]
    },
    {
        id: 1,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -1000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 1000,
                unit: "$"
            }
        ]
    },
    {
        id: 2,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -2000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 2000,
                unit: "$"
            }
        ]
    },
    {
        id: 1,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -1000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 1000,
                unit: "$"
            }
        ]
    },
    {
        id: 2,
        date: "2023-03-01",
        note: "Recieved Salary",
        entries: [
            {
                account: {
                    id: 1,
                    name: "Salary"
                },
                amount: -2000,
                unit: "$"
            },
            {
                account: {
                    id: 2,
                    name: "Bank"
                },
                amount: 2000,
                unit: "$"
            }
        ]
    }
]

export const parentAccounts = [
    "Assets",
    "Bank [Assets]",
    "Cash [Assets]",
    "Debt [Liabilities]",
    "Loan [Liabilities]",
    "Credit Card [Liabilities]",
    "Equity [Equity]",
    "Opening Balance [Equity]",
    "Salary [Income]",
    "Job 1 [Income/Salary]",
    "Job 2 [Income/Salary]",
    "Job 3 [Income/Salary]",
    "Job 4 [Income/Salary]",
    "Job 5 [Income/Salary]",
    "Job 6 [Income/Salary]",
]

export const filterSets = [
    {
        "name": "Everything"
    },
    {
        "name": "Last Week"
    },
    {
        "name": "Last Month"
    },
    {
        "name": "Last Year"
    }
]