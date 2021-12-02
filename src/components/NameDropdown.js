import React from 'react';

const NameDropdown = ({names, changePerson, updatePersonInput}) => {
  return (
      <select className="custom-select" onChange={e => changePerson(e.target.value, updatePersonInput)}>
        <option defaultValue>Assign Person</option>
        {names.map(function(d, idx){
          return (<option key={idx}>{d}</option>)
        })}
      </select>
  );
  }

export default NameDropdown;
