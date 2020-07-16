import React from 'react';
import PropTypes from 'prop-types';

import {
  Icon,
  Label,
  ExerciseItemContainer,
  Table,
  THeader,
  TBody,
  TH,
  ContainerTop,
  DeleteButton,
} from './styled';
import { menuPlansSvg } from '../../styles/svgs';

const ExerciseItem = ({
  exercisePlan: { name, sets, _id },
  isDeletable,
  handleDelete,
}) => {
  return (
    <ExerciseItemContainer>
      <ContainerTop>
        <Icon>{menuPlansSvg}</Icon>
        <Label>{name}</Label>

        {isDeletable && (
          <DeleteButton right onClick={() => handleDelete(_id)}>
            x
          </DeleteButton>
        )}
      </ContainerTop>

      <Table>
        <THeader>
          <tr>
            <TH>set</TH>
            <TH>reps range</TH>
            <TH>rest</TH>
          </tr>
        </THeader>

        <TBody>
          {sets.length > 0 &&
            sets.map(({ _id, repRange, rest }, num) => {
              return (
                <tr key={_id}>
                  <TH>set {num + 1}</TH>
                  <TH>
                    {repRange.from} - {repRange.to}
                  </TH>
                  <TH>
                    {rest.min}:{rest.sec} min
                  </TH>
                </tr>
              );
            })}
        </TBody>
      </Table>
    </ExerciseItemContainer>
  );
};

ExerciseItem.propTypes = {
  exercisePlan: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  isDeletable: PropTypes.bool,
};

export default ExerciseItem;
