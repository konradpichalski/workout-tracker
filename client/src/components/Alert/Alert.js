import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AlertMessage from './AlertMessage';

import { AlertContainer } from './styled';

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    return (
      <AlertContainer>
        {alerts.map((alert) => {
          return <AlertMessage key={alert.id} alert={alert} />;
        })}
      </AlertContainer>
    );
  }

  return null;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ alert }) => ({
  alerts: alert,
});

export default connect(mapStateToProps)(Alert);
