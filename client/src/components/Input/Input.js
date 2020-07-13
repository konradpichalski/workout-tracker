import React from 'react';
import PropTypes from 'prop-types';

import { InputContainer, Label, InputElement } from './styled';

const Input = ({ label, name, value, onChange, ...rest }) => (
  <InputContainer>
    <Label htmlFor={name}>{label}</Label>
    <InputElement name={name} value={value} onChange={onChange} {...rest} />
  </InputContainer>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
