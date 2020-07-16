import React from 'react';
import PropTypes from 'prop-types';

import { InputNumberElement } from './styled';

const InputNumber = ({ label, name, value, onChange, ...rest }) => (
  <InputNumberElement
    name={name}
    value={value}
    onChange={onChange}
    type='number'
    {...rest}
  />
);

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
