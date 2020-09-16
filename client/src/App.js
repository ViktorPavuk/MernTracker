import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>

    <GlobalProvider>
      <Navbar/>

  
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
    </>
  );
}

export default App;
