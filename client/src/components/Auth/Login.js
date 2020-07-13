import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import components
import Input from '../Input/Input';
import ActionButton from '../ActionButton/ActionButton';
// import actions
import { login } from '../../actions/auth';

// import styling
import { AuthContainer, Logo, Header2, Form } from './styled';
import { Paragraph } from '../../styles/shared.styled';
import { logoIconSvg } from '../../styles/svgs';

// component
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/calendar' />;
  }

  return (
    <AuthContainer>
      <Logo>{logoIconSvg}</Logo>
      <Header2>Login</Header2>
      <Form onSubmit={onSubmit}>
        <Input label='email' name='email' value={email} onChange={onChange} />
        <Input
          label='password'
          name='password'
          value={password}
          type='password'
          onChange={onChange}
        />
      </Form>
      <ActionButton primary fullWidth onClick={onSubmit}>
        Login
      </ActionButton>

      <Paragraph>
        Don't have an account? <Link to='/register'>Register</Link>
      </Paragraph>
    </AuthContainer>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
