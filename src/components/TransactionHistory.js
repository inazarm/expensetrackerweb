import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project1 Income
                    <span>$1,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Project1 Salary
                    <span>-$700</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
export default 'TransactionHistory';