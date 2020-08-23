import React, { useState, useContext } from 'react';
import { TransactionForm } from '../styled-components';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };
        addTransaction(newTransaction);
    };
    return (
        <TransactionForm onSubmit={(event) => handleSubmit(event)}>
            <h3>Add new transaction</h3>
            <form>
                <div>
                    <label>
                        Text
                        <input
                            type="text"
                            name="text"
                            placeholder="Add text..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Amount
                        <span className="explanation">
                            (positive — income, negative — expense)
                        </span>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter amount..."
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                    <button type="submit">Add transaction</button>
                </div>
            </form>
        </TransactionForm>
    );
};
