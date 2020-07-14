import React from 'react';
import PropTypes from 'prop-types';

import ActionButton from '../ActionButton/ActionButton';

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
  handleDelete,
  handleEdit,
}) => {
  return (
    <ListItemContainer>
      <Selectable onClick={() => setActive(_id)}>
        <Icon active={active}></Icon>
        <ListLabel active={active}>{name}</ListLabel>
      </Selectable>

      {active && (
        <ButtonWrapper>
          {isEditable && (
            <ActionButton primary smMargin onClick={() => handleEdit(_id)}>
              Edit
            </ActionButton>
          )}
          {isDeletable && (
            <ActionButton smMargin onClick={() => handleDelete(_id)}>
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
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
};

export default ListItem;
