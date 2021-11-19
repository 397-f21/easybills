import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NameDropdown from './NameDropdown.js'

import '../index.css';

const addItemPrice = (itemInput, priceInput, setItems) => {  //name is a str
    if (!itemInput.trim() && !priceInput.trim()) {
        alert('Please enter the name of the item and its price');
    } else if (!itemInput.trim()) {
        alert('Please enter the name of the item');
    } else if (!priceInput.trim()) {
        alert('Please enter a price');
    } else {
        setItems(items => [...items, {'name': itemInput, 'price': priceInput}]);
        document.getElementById("nameSubmit").value = ''; //Make sure to add an item submit element ID
    }
}

const ItemInput = ({ names, items, setItems, buttonPressed }) => {
    const [itemInput, updateItemInput] = useState('');
    const [priceInput, updatePriceInput] = useState('');

    const changeHandler = (txt, updateInput) => {
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
        <div>
                {(!buttonPressed) && <h5>Please Enter Each item's Price (shown on the bill without taxes):</h5>}
                <div id="item-entry">
                {!(buttonPressed) && <input id="itemSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="Chicken Sandwich" onChange={e => changeHandler(e.target.value, updateItemInput)}></input>}
                {!(buttonPressed) && <input id="itemSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="10.00" onChange={e => changeHandler(e.target.value, updatePriceInput)}></input>}
                {!(buttonPressed) && <a  href="#" className="button" ref={inputRef} onClick={() => addItemPrice(itemInput, priceInput, setItems)}>Add Item</a>}                
                </div>
            </div>
        {(!buttonPressed) &&
            < div className="names-list">
            <ol>
                {items.map((item, key) =>
                    <li className="flex-container" key={key}>
                        <div className="item">{item.name}</div>
                        <div className="item">{item.price}</div>
                        <NameDropdown names={names}></NameDropdown>
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