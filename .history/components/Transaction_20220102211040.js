import React from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';


    return (
        <div>
            <li className={transaction.amount < 0  ? 'minus' : 'plus'}>{transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button  className="delete-btn">x</button></li>
        </div>
    )
}

export default Transaction
