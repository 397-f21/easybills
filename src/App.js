import './App.css';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NameInput from './components/NameInput';
import ItemInput from './components/ItemInput';


// const total_amount = 100;
// const people_amount = 3;
// const dish1 = 25;
// const dish2 = 50;
// const dish3 = 25;

// const tip = total_amount * 0.20;
// const user1 = dish1 / total_amount * tip + dish1;

// your share = (total+tip) / menu total * what you ordered
let result = "Test result";
let total;

function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [totalwtip, setTotalwTip] = useState(0);
  const [evenResult, setEvenResult] = useState(0);
  const [tip, setTip] = useState(0);
  const [page, setPage] = useState(1);

  const [names, setNames] = useState([]); 
  const [items, setItems] = useState([]); 
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // const [inputList, setInputList] = useState([]);
  // const onAddBtnClick = event => {
  //   setInputList(inputList.concat(<AddRow key={inputList.length} />));
  // };

  const AddRow = () => {
    return (
      <input type="text" class="form-control" id="individual" onChange={(e) => changeTotalBill(e)} />
    )
  }

  const changeTotalBill = (e) => {
    setTotalBill(e.target.value);
  }

  const changeNumPeople = (e) => {
    setNumPeople(e.target.value);
  }

  const calculateTotal = () => {
    total = (totalBill * (1 + tip)).toFixed(2);
    result = (total / numPeople).toFixed(2); 
    setTotalwTip(total);
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
          <label for="billAmt">Total Bill (after taxes, without Tip)</label>
          <input type="text" class="form-control" id="billAmt" placeholder="Enter total bill" onChange={(e) => changeTotalBill(e)}></input>
          <small id="emailHelp" class="form-text text-muted">For splitting evenly, enter the total bill including tip.</small>
        </div>
        <div className="form-group">
          <label>Tip Amount</label>
          <select className="form-select" onChange={e => handleTipChange(e)}>
            <option selected>Choose Tip Percentage (%)</option>
            <option value=".0">0%</option>
            <option value=".08">8%</option>
            <option value=".10">10%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".20">20%</option>
          </select>
        </div>
        <NameInput names={names} setNames={setNames} buttonPressed={buttonPressed}/>
        <div className="form-group">
          <label for="numPeople">Number of People</label>
          <input type="text" class="form-control" id="numPeople" placeholder="Enter total number of people" onChange={(e) => changeNumPeople(e)}></input>
        </div>
        
        <Stack spacing={2}>
          <div className=" form-group">
          <label for="individual">Enter the menu prices of what person {page} ordered (without taxes)</label>
          {/* <div className="center">
            <button className="btn btn-primary" onClick={onAddBtnClick}>Add an item</button>
          {inputList}
          </div> */}
          <ItemInput items={items} setItems={setItems} buttonPressed={buttonPressed}/>
          <label for="individual">Name:</label>
          <input type="text" class="form-control" id="individual" onChange={(e) => changeTotalBill(e)}></input>
          <Typography>Person: {page}</Typography>
          <Pagination count={numPeople} page={page} onChange={handleChange} />
          </div>
        </Stack>
        <div className="center">
          <button className="btn btn-primary" onClick={calculateTotal}>Calculate</button>
        </div>
        <div className="form-group center">
          <h2>Your total cost after tip is: {`$${totalwtip}`}</h2>
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