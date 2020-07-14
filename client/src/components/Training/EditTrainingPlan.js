import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTrainingPlanById } from '../../actions/trainingplan';

const EditTrainingPlan = ({ trainingPlan, getTrainingPlanById, match }) => {
  const trainingPlanId = match.params.id;

  useEffect(() => {
    getTrainingPlanById(trainingPlanId);
  }, []);

  return <div>{trainingPlanId !== 'new' ? 'Edit ' : 'Add '} training plan</div>;
};

EditTrainingPlan.propTypes = {
  trainingPlan: PropTypes.object.isRequired,
  getTrainingPlanById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ trainingPlan }) => {
  return {
    trainingPlan: trainingPlan.currentTrainingPlan,
  };
};

export default connect(mapStateToProps, { getTrainingPlanById })(
  EditTrainingPlan,
);
