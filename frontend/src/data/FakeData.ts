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