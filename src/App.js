import React from 'react';
import './App.css';

import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpense';
import {Transactions, AddTransaction} from './components/Transactions';
import { GlobalProvider } from './content/Global';


function App() {
  return (
    <GlobalProvider>
      <h2>
        Expense Tracker
      </h2>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactions/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
