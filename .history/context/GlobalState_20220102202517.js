import React, { createContext, useReducer } from "react";

const InitialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
            
    ]
}