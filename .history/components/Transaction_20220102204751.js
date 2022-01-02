import React from "react"

function Transaction({transaction}) {

    const sign = transaction.amount < 0 ? '-' : '+';


    return (
        <div>
            <li className="minus">{transaction.text}<span>{sign}${transaction.amount}</span><button className="delete-btn">x</button></li>
        </div>
    )
}

export default Transaction
