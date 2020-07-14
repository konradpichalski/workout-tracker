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
}) => {
  const handleClick = () => setActive(_id);

  return (
    <ListItemContainer>
      <Selectable onClick={handleClick}>
        <Icon active={active}></Icon>
        <ListLabel active={active}>{name}</ListLabel>
      </Selectable>

      {active && (
        <ButtonWrapper>
          {isEditable && (
            <ActionButton primary smMargin>
              Edit
            </ActionButton>
          )}
          {isDeletable && <ActionButton smMargin>Delete</ActionButton>}
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
};

export default ListItem;
