import React from 'react';
import {View} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 22.56,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.96,
    date: new Date('2022-01-05x'),
  },
  {
    id: 'e3',
    description: 'phone iphone11',
    amount: 999.99,
    date: new Date('2022-05-16'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-07-30'),
  },
  {
    id: 'e5',
    description: 'Some fruit',
    amount: 34.99,
    date: new Date('2022-09-03'),
  },
];
const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
export default ExpensesOutput;
