import React, { useState } from 'react'

export const AddTransaction = () => {

    const [description,setDescription]=useState();
    const [transactionAmount,setTransactionAmount]=useState();
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description" >Description</label>
                    <input type="text" 
                    id="description" 
                    placeholder="Details of transaction"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label className="transactionAmount">Transaction Amount</label>
                    <input type="number"
                        id="transactionAmount"
                        placeholder="Enter transaction amount"
                        value={transactionAmount}
                        onChange={(e)=>setTransactionAmount(e.target.value)}/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
export default 'AddTransaction';
