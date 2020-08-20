import React from 'react';
import { BudgetContainer } from '../styled-components';

export const Budget = () => {
    return (
        <BudgetContainer>
            <div>
                <h4>Income</h4>
                <p className="income-size">+$0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="expense-size">-$0.00</p>
            </div>
        </BudgetContainer>
    );
};
