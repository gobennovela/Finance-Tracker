import React, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_TRANSACTION":
                return {
                    ...state,
                    transactions: [
                        ...state.transactions,
                        {
                            id: Math.floor(Math.random() * 100000000),
                            text: action.payload.text,
                            amount: action.payload.amount
                        }
                    ]
                }
            case "REMOVE_TRANSACTION":
                return {
                    ...state,
                    transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)
                }
            default:
                return state;
        }
    }, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}