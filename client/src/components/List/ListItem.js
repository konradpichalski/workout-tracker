import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ActionButton from '../ActionButton/ActionButton';

import { deleteTrainingPlan } from '../../actions/trainingplan';

import {
  ListItemContainer,
  Selectable,
  Icon,
  ListLabel,
  ButtonWrapper,
} from './styled';

const ListItem = ({
  item: { name, _id },
  active,
  setActive,
  isEditable,
  isDeletable,
  deleteTrainingPlan,
}) => {
  const [redirect, setRedirect] = useState('');

  const handleClick = () => setActive(_id);

  if (redirect !== '') return <Redirect to={redirect} />;

  return (
    <ListItemContainer>
      <Selectable onClick={handleClick}>
        <Icon active={active}></Icon>
        <ListLabel active={active}>{name}</ListLabel>
      </Selectable>

      {active && (
        <ButtonWrapper>
          {isEditable && (
            <ActionButton
              primary
              smMargin
              onClick={() => setRedirect(`/trainingplan/${_id}`)}
            >
              Edit
            </ActionButton>
          )}
          {isDeletable && (
            <ActionButton smMargin onClick={() => deleteTrainingPlan(_id)}>
              Delete
            </ActionButton>
          )}
        </ButtonWrapper>
      )}
    </ListItemContainer>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool,
  idDeletable: PropTypes.bool,
  deleteTrainingPlan: PropTypes.func.isRequired,
};

export default connect(null, { deleteTrainingPlan })(ListItem);
