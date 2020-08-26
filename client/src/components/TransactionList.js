import React, { useContext } from 'react';
import { TransactionListStyles } from '../styled-components';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <TransactionListStyles>
            <h3>History</h3>
            <ul className="transactionList">
                {transactions.map(({ id, text, amount }) => (
                    <li className="minus" key={id}>
                        <span className="moneyText">{text}</span>
                        <span>{amount}</span>
                        <button className="deleteBtn" onClick={() => deleteTransaction(id)}>X</button>
                    </li>
                ))}
            </ul>
        </TransactionListStyles>
    );
};
