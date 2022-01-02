function Transaction(transaction) {
    return (
        <div>
            <li className="minus">{transaction.text}<span>-$400</span><button className="delete-btn">x</button></li>
        </div>
    )
}

export default Transaction
