import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const context = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus"><span>-$400</span><button className="delete-btn">x</button></li>
            </ul>
        </>
    )
}

export default TransactionList
