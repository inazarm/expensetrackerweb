import React, {createContext,userReducer, Children, useReducer} from 'react';

//Import the Reducer
import AppReducer from './AppReducer';
//Create the initial state
const initialState={
    transactions:[
        {id:1, description:"Income 1", transactionAmount:8000},
        {id:1, description:"Expense 1", transactionAmount:-1000},
        {id:1, description:"Income 2", transactionAmount:5000},
        {id:1, description:"Expense 2", transactionAmount:-3000}
    ]
}

//Create Global Context
export const GlobalContext=createContext(initialState);

//create a provider for the global context
export const GlobalProvider=({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState);
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}