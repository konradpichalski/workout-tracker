import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getExercisePlans } from '../../actions/exerciseplan';

import { ButtonContainer, ButtonChip } from './styled';
import { Container, Paragraph } from '../../styles/shared.styled';

const SelectList = ({
  exercisePlans,
  getExercisePlans,
  handleAddExercisePlan,
  children,
}) => {
  useEffect(() => {
    getExercisePlans();
  }, [getExercisePlans]);

  const renderExercisePlans = () =>
    exercisePlans.map((exercise) => {
      const { _id, name } = exercise;

      return (
        <ButtonChip
          key={_id}
          onClick={() => handleAddExercisePlan(exercise)}
          id={_id}
        >
          {name}
        </ButtonChip>
      );
    });

  return (
    <Container>
      <Paragraph>Add an exercise: </Paragraph>
      <ButtonContainer>
        {exercisePlans.length > 0 && renderExercisePlans()}
        {children}
      </ButtonContainer>
    </Container>
  );
};

SelectList.propTypes = {
  exercisePlans: PropTypes.array.isRequired,
  getExercisePlans: PropTypes.func.isRequired,
  handleAddExercisePlan: PropTypes.func.isRequired,
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlans: exercisePlan.exercisePlans,
  };
};

export default connect(mapStateToProps, { getExercisePlans })(SelectList);
