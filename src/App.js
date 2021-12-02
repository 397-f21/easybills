import './App.css';
import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import NameInput from './components/NameInput';
import ItemInput from './components/ItemInput';
import { queryAllByDisplayValue } from '@testing-library/dom';


function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [totalwtip, setTotalwTip] = useState(0);
  const [evenResult, setEvenResult] = useState(0);
  const [tip, setTip] = useState(0);
  //const [page, setPage] = useState(1);

  const [names, setNames] = useState([]); 
  const [items, setItems] = useState([]); 
  const [buttonPressed, setButtonPressed] = useState(false);

  const [dict, setDict] = useState({});

  let total;
  let result;
  // const makeDictionary = (dictionary, items) => {
  //   items.map(item => {
  //     dictionary[item.owner] += parseInt(item.price);
  //   })
  // };

  // makeDictionary(dictionary, items);
  // console.log("dictionary", dictionary);

  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  // const [inputList, setInputList] = useState([]);
  // const onAddBtnClick = event => {
  //   setInputList(inputList.concat(<AddRow key={inputList.length} />));
  // };

  // const AddRow = () => {
  //   return (
  //     <input type="text" className="form-control" id="individual" onChange={(e) => changeTotalBill(e)} />
  //   )
  // }

  const changeTotalBill = (e) => {
    setTotalBill(e.target.value);
  }

  const changeNumPeople = (e) => {
    setNumPeople(e.target.value);
  }

  const calculateTotal = () => {
    total = (totalBill * (1 + tip)).toFixed(2);
    setTotalwTip(total);
  }

  const handleTipChange = (e) => {
    setTip(e.target.value);
  }

  const calculateEven = () => {
    result = (total / numPeople).toFixed(2); 
    setEvenResult(result);
  }

//let numPeople;
  let dictionary = {};
  const calculateByItem = (items) => {
    let totalwotax =0;
    for (let i = 0; i < items.length; i++) {
      let person = items[i].owner;
      totalwotax += parseFloat(items[i].price);
      if (!(person in dictionary)) {
        dictionary[person] = parseFloat(items[i].price);
      } else {
        dictionary[person] += parseFloat(items[i].price);
      }
    }

    for (const key in dictionary) {
      // console.log("tip amount total: " + tip*totalwotax);
      // console.log("tip person is paying: " + (dictionary[key] / totalwotax) * tip*totalwotax);
      // console.log("adding this: " + (dictionary[key] / totalwotax * total).toFixed(2));
      dictionary[key] += (dictionary[key] / totalwotax) * tip*totalwotax;
    }
    //numPeople = Object.keys(dictionary).length;
    // console.log("alex:" + dictionary["Alex"]);
    // console.log("brian:" + dictionary["Brian"]);
    setDict(dictionary);
    for (const key in dictionary) {
      console.log(key + " " + dict[key]);
    }
    
  }

  return (
    <div className="easyBills">
      <div className="container">
        <div className="center">
          <h1>Easybills</h1>
        </div>
        
        <div className="form-group">
          <h5>
            <label htmlFor="billAmt">Total Bill (after taxes, without Tip)</label>
          </h5>
          <input type="text" className="form-control" id="billAmt" placeholder="Enter total bill" onChange={(e) => changeTotalBill(e)}></input>
        </div>

        <div className="form-group">
          <h5>
            <label htmlFor="numPeople">Number of People in Party:</label>
          </h5>
          <input type="text" className="form-control" id="numPeople" placeholder="Enter total number of people" onChange={(e) => changeNumPeople(e)}></input>
        </div>

        <NameInput names={names} setNames={setNames} buttonPressed={buttonPressed}/>
        <ItemInput names={names} items={items} setItems={setItems} buttonPressed={buttonPressed}/>

        <div className="form-group">
          <h5>
            <label>Tip Amount</label>
          </h5>
          <select className="form-select" onChange={e => handleTipChange(e)}>
            <option defaultValue>Choose Tip Percentage (%)</option>
            <option value=".0">0%</option>
            <option value=".08">8%</option>
            <option value=".10">10%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".20">20%</option>
          </select>
        </div>

        <Stack spacing={2}>
          
          {/* <div className="center">
            <button className="btn btn-primary" onClick={onAddBtnClick}>Add an item</button>
          {inputList}
           */}
          
          
          {/* <Typography>Person: {page}</Typography>
          <Pagination count={numPeople} page={page} onChange={handleChange} /> */}
          
        </Stack>
        <div className="center">
          <button className="btn btn-primary" onClick={() => {calculateTotal(); calculateEven()}}>Calculate Even Split</button>
          <button className="btn btn-primary" onClick={() => {calculateTotal(); calculateByItem(items)}}>Calculate By Item</button>
        </div>
        <div className="form-group center">
          <h2>The total cost after tip is: {`$${totalwtip}`}</h2>
          <ul>
            {Object.keys(dict).length !== 0 && names.map((value, key) => (
              <li key={key}>{value} should pay {`$${dict[value]}`}</li>
            ))}
          </ul>  
        </div>
      </div>
    </div>
  );
}

export default App;
