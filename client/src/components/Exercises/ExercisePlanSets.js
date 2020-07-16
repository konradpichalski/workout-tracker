import React from 'react';
import PropTypes from 'prop-types';

import ExerciseSet from './ExerciseSet';
import ActionButton from '../ActionButton/ActionButton';

import { Table, TH, SetsContainer, THeader, TBody } from './styled';

const ExercisePlanSets = ({
  sets,
  handleAddSet,
  handleSetChange,
  handleRemoveSet,
}) => {
  return (
    <SetsContainer>
      <Table noPadding>
        <THeader>
          <tr>
            <TH padding>Set</TH>
            <TH padding>Reps range</TH>
            <TH padding>Rest</TH>
          </tr>
        </THeader>

        <TBody>
          {sets.map((set, num) => (
            <ExerciseSet
              key={`setUI${num}`}
              set={set}
              num={num}
              handleSetChange={(e, num, type) => handleSetChange(e, num, type)}
              handleRemoveSet={(num) => handleRemoveSet(num)}
            />
          ))}
        </TBody>
      </Table>

      <ActionButton primary handleClick={handleAddSet}>
        Add set
      </ActionButton>
    </SetsContainer>
  );
};

ExercisePlanSets.propTypes = {
  sets: PropTypes.array.isRequired,
  handleAddSet: PropTypes.func.isRequired,
  handleSetChange: PropTypes.func.isRequired,
  handleRemoveSet: PropTypes.func.isRequired,
};

export default ExercisePlanSets;
