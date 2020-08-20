import React from 'react';
import { TransactionListStyles } from '../styled-components';

export const TransactionList = () => {
    return (
        <TransactionListStyles>
            <h3>History</h3>
            <ul className="transactionList">
                <li className="minus">
                    <span className="moneyText">Cash</span>
                    <span>-$400</span>
                    <button class="deleteBtn">X</button>
                </li>
            </ul>
        </TransactionListStyles>
    );
};
