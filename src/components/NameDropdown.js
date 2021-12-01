import React from 'react';

const NameDropdown = ({names, changePerson, updatePersonInput}) => {
  return (
    <div>
      <select onChange={e => changePerson(e.target.value, updatePersonInput)}>
      {names.map(function(d, idx){
         return (<option key={idx}>{d}</option>)
       })}
      </select>
      </div>
  );
  }

export default NameDropdown;
