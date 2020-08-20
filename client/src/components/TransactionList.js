import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className="transactionList">
        <li className="minus">Cash <span>-$400</span> <button class="deleteBtn">X</button></li>
            </ul>
        </div>
    )
}
