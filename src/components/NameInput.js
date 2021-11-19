import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import '../index.css';

const addName = (input, setNames) => {  //name is a str
    if (!input.trim()) {
        alert('Please enter a name');
    } else {
        setNames(names => [...names, input]);
        document.getElementById("nameSubmit").value = '';
    }
}

const NameInput = ({ names, setNames, buttonPressed }) => {
    const [input, updateInput] = useState('');

    const changeHandler = txt => {
        updateInput(txt);
    }

    const deleteName = (id, setNames) => {
        console.log("ID: " + id);
        names.splice(id, 1);
        setNames(names => [...names]);
        console.log("names: " + names);
    }

    const inputRef = React.useRef(null);

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          inputRef.current.click();
        }
      }

    return (
        <> {(!buttonPressed) &&
            < div className="names-list">
            <ol>
                {names.map((name, key) =>
                    <li className="flex-container" key={key}>
                        <div className="name">{name}</div>
                        <a href="#" className="flex-item" onClick={() => deleteName(key, setNames)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                    </li> 
                )}
            </ol>
        </div>
        }
            <div>
                {(!buttonPressed) && <h2>Please Enter Contestants' Names:</h2>}
                <div id="name-entry">
                {!(buttonPressed) && <input id="nameSubmit" type='text' onKeyDown={_handleKeyDown} placeholder="Sam" onChange={e => changeHandler(e.target.value)}></input>}
                {!(buttonPressed) && <a  href="#" className="button" ref={inputRef} onClick={() => addName(input, setNames)}>Add Name</a>}                
                </div>
            </div>
        </>
    );
};

export default NameInput;