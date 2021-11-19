import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import NameDropdown from './NameDropdown.js'

import '../index.css';

const addItem = (input, setItems) => {  //name is a str
    if (!input.trim()) {
        alert('Please enter an item');
    } else {
        setItems(items => [...items, input]);
        document.getElementById("nameSubmit").value = ''; //Make sure to add an item submit element ID
    }
}

const ItemInput = ({ names, items, setItems, buttonPressed }) => {
    const [input, updateInput] = useState('');

    const changeHandler = txt => {
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
                {!(buttonPressed) && <input id="itemSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="10.00" onChange={e => changeHandler(e.target.value)}></input>}
                {!(buttonPressed) && <a  href="#" className="button" ref={inputRef} onClick={() => addItem(input, setItems)}>Add Item</a>}                
                </div>
            </div>
        {(!buttonPressed) &&
            < div className="names-list">
            <ol>
                {items.map((item, key) =>
                    <li className="flex-container" key={key}>
                        <div className="item">{item}</div>
                        <a href="#" className="flex-item" onClick={() => deleteItem(key, setItems)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                        <NameDropdown names={names}></NameDropdown>
                    </li> 
                )}
            </ol>
        </div>
        }
            
        </>
    );
};

export default ItemInput;