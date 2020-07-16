import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonChip } from './styled';
import { Container, Paragraph } from '../../styles/shared.styled';

const SelectList = ({ plans, handleClick, label, children }) => {
  const renderPlans = () =>
    plans.map((plan) => {
      const { _id, name } = plan;

      return (
        <ButtonChip key={_id} onClick={() => handleClick(plan)} id={_id}>
          {name}
        </ButtonChip>
      );
    });

  return (
    <Container>
      <Paragraph>{label}</Paragraph>
      <ButtonContainer>
        {plans.length > 0 && renderPlans()}
        {children}
      </ButtonContainer>
    </Container>
  );
};

SelectList.propTypes = {
  plans: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SelectList;
