import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import Input from '../Input/Input';
import ActionButton from '../ActionButton/ActionButton';
// import actions
import { register } from '../../actions/auth';

// import styling
import { AuthContainer, Logo, Header2, Form } from './styled';
import { logoIconSvg } from '../../styles/svgs';

// component
const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/calendar' />;
  }

  return (
    <AuthContainer>
      <Logo>{logoIconSvg}</Logo>

      <Header2>Register</Header2>

      <Form onSubmit={onSubmit}>
        <Input label='name' name='name' value={name} onChange={onChange} />
        <Input label='email' name='email' value={email} onChange={onChange} />
        <Input
          label='password'
          name='password'
          value={password}
          type='password'
          onChange={onChange}
        />
        <Input
          label='password2'
          name='password2'
          value={password2}
          type='password'
          onChange={onChange}
        />
      </Form>

      <ActionButton primary fullWidth>
        Register
      </ActionButton>
    </AuthContainer>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
