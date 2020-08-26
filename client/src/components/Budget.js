import React from 'react';
import { BudgetContainer } from '../styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Budget = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
        .filter((value) => value > 0)
        .reduce((acc, value) => (acc += value), 0)
        .toFixed(2);
    const expense =
        amounts
            .filter((value) => value < 0)
            .reduce((acc, value) => (acc += value), 0) * -(1).toFixed(2);
    return (
        <BudgetContainer>
            <div>
                <h4>Income</h4>
                <p className="income-size">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="expense-size">-${expense}</p>
            </div>
        </BudgetContainer>
    );
};
