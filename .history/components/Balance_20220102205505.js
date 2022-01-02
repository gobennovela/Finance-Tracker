import React from "react";
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), )

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">$0.00</h1>
        </div>
    )
}

export default Balance
