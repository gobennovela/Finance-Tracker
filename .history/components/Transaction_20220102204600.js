import React from "react"

function Transaction({transaction}) {

    const sign = transaction


    return (
        <div>
            <li className="minus">{transaction.text}<span>-$400</span><button className="delete-btn">x</button></li>
        </div>
    )
}

export default Transaction
