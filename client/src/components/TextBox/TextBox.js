import React from 'react';
import PropTypes from 'prop-types';

import { InputContainer, Label, TextBoxElement } from './styled';

const TextBox = ({ label, name, value, onChange, ...rest }) => (
  <InputContainer>
    <Label htmlFor={name}>{label}</Label>
    <TextBoxElement name={name} value={value} onChange={onChange} {...rest} />
  </InputContainer>
);

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextBox;
