import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
   const {transactions} = useContext(GlobalContext)
const amounts = transactions.map(transaction => transaction.amount)
   const balance = amounts.reduce((acc, val) => acc += val, 0)
    return (
        <div className="balance">
          <h4>Your balance</h4>
          <h1>{balance}₽</h1>  
        </div>
    )
}
