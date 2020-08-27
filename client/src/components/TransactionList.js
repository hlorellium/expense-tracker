import React, { useContext, useEffect } from 'react';
import { TransactionListStyles } from '../styled-components';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, deleteTransaction, getTransactions } = useContext(
        GlobalContext
    );

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TransactionListStyles>
            <h3>History</h3>
            <ul className="transactionList">
                {transactions.map(({ id, text, amount }) => (
                    <li key={id}>
                        <span className="moneyText">{text}</span>
                        <span className={amount < 0 ? 'negative' : 'positive'}>
                            {amount}
                        </span>
                        <button
                            className="deleteBtn"
                            onClick={() => deleteTransaction(id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </TransactionListStyles>
    );
};
