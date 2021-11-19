import React from 'react';

const NameDropdown = ({names}) => {
  return (
    <div>
      <select>
      {names.map(function(d, idx){
         return (<option key={idx}>{d}</option>)
       })}
      </select>
      </div>
  );
  }

export default NameDropdown;
