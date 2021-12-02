import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NameDropdown from './NameDropdown.js'

import '../index.css';

const addItemPrice = (itemInput, priceInput, personInput, setItems) => {  //name is a str
    if (!itemInput.trim() && !priceInput.trim()) {
        alert('Please enter the name of the item and its price');
    } else if (!itemInput.trim()) {
        alert('Please enter the name of the item');
    } else if (!priceInput.trim()) {
        alert('Please enter a price');
    } else if (!personInput.trim()) {
        alert('Please assign a person to this item');
    } else {
        setItems(items => [...items, { 'name': itemInput, 'price': priceInput, 'owner': personInput }]);
        console.log("person input: " + personInput);
        document.getElementById("itemNameSubmit").value = '';
        document.getElementById("itemPriceSubmit").value = '';
        document.getElementById("nameSubmit").value = ''; //Make sure to add an item submit element ID
    }
}

const ItemInput = ({ names, items, setItems, buttonPressed }) => {
    const [itemInput, updateItemInput] = useState('');
    const [priceInput, updatePriceInput] = useState('');
    const [personInput, updatePersonInput] = useState('');

    const changeHandler = (txt, updateInput) => {
        updateInput(txt);
    }

    const changePerson = (txt, updateInput) => {
        console.log("txt: " + txt);
        updateInput(txt);
    }

    const deleteItem = (id, setItems) => {
        console.log("ID: " + id);
        items.splice(id, 1);
        setItems(items => [...items]);
        console.log("items: " + items);
    }

    const inputRef = React.useRef(null);

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          inputRef.current.click();
        }
      }

    return (
        <> 
            <div className="form-group">
                {(!buttonPressed) && <h5>Please Enter Each Item's Price (Without Taxes):</h5>}
                <div className="input-group mb-3" id="item-entry">
                    {!(buttonPressed) && <input className="form-control" id="itemNameSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="Chicken Sandwich" onChange={e => changeHandler(e.target.value, updateItemInput)}></input>}
                    {!(buttonPressed) && <input className="form-control" id="itemPriceSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="10.00" onChange={e => changeHandler(e.target.value, updatePriceInput)}></input>}
                    {!(buttonPressed) && <NameDropdown names={names} id="personInput" changePerson={changePerson} updatePersonInput={updatePersonInput}></NameDropdown>}    
                    {!(buttonPressed) && <div className="input-group-append"><button className="btn btn-primary" ref={inputRef} onClick={() => addItemPrice(itemInput, priceInput, personInput, setItems)}>Add Item</button></div>}
                </div>
            </div>
            {(!buttonPressed) &&
                <div className="names-list form-group">
                <ol>
                    {items.map((item, key) =>
                        <li className="flex-container" key={key}>
                            <div className="item">{item.name}</div>
                            <div className="item">{item.price}</div>
                            <div className="item">{item.owner}</div>
                            <a href="#" className="flex-item" onClick={() => deleteItem(key, setItems)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </a>
                        </li> 
                    )}
                </ol>
            </div>
            }    
        </>
    );
};

export default ItemInput;