import React from 'react';
import PropTypes from 'prop-types';


const NameDropdown = () => (
  <div>
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </select>
  </div>
);

NameDropdown.propTypes = {};

NameDropdown.defaultProps = {};

export default NameDropdown;
