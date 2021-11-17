import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const total_amount = 100;
const people_amount = 3;
const dish1 = 25;
const dish2 = 50;
const dish3 = 25;

const tip = total_amount * 0.20;
const user1 = dish1 / total_amount * tip + dish1;

// your share = (total+tip) / menu total * what you ordered
let result = "Test result";

function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [evenResult, setEvenResult] = useState(0);
  const [tip, setTip] = useState(0);

  const changeTotalBill = (e) => {
    setTotalBill(e.target.value);
  }

  const changeNumPeople = (e) => {
    setNumPeople(e.target.value);
  }

  const calculateTotal = () => {
    result = (totalBill / numPeople * (1 + tip)).toString();
    setEvenResult(result);
  }

  const handleTipChange = (e) => {
    setTip(e.target.value);
  }

  return (
    <div className="easyBills">
      <div className="container">
        <div className="center">
          <h1>Easybills</h1>
        </div>
        <div className="form-group">
          <label for="billAmt">Total Bill (without Tip)</label>
          <input type="text" class="form-control" id="billAmt" placeholder="Enter total bill" onChange={(e) => changeTotalBill(e)}></input>
          <small id="emailHelp" class="form-text text-muted">For splitting evenly, enter the total bill including tip.</small>
        </div>
        <div className="form-group">
          <label>Tip Amount</label>
          <select className="form-select" onChange={e => handleTipChange(e)}>
            <option selected>Choose Tip Percentage (%)</option>
            <option value="0">0%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".20">20%</option>
          </select>
        </div>
        <div className="form-group">
          <label for="numPeople">Number of People</label>
          <input type="text" class="form-control" id="numPeople" placeholder="Enter total number of people" onChange={(e) => changeNumPeople(e)}></input>
        </div>
        <div className="center">
          <button className="btn btn-primary" onClick={calculateTotal}>Calculate</button>
        </div>
        <div className="form-group center">
          <h2>Each Person Should Pay: {`$${evenResult}`}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;


// dictionary for dishes and prices
// chicken: 20

// dictionary for dishes and people
// chicken: [alex, brian] $20 --> +10
// steak: [yufei]

// dictionary for people and totals
//alex: 10