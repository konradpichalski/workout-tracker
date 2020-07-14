import React from 'react';
import PropTypes from 'prop-types';

import { AlertMsg } from './styled';

const AlertMessage = ({ alert: { msgId, alertType, msg } }) => (
  <AlertMsg id={msgId} status={alertType}>
    {msg}
  </AlertMsg>
);

AlertMessage.propTypes = {
  alert: PropTypes.object.isRequired,
};

export default AlertMessage;
