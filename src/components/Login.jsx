import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    password: '',
  };

  handleEmailChange = ({ target: { value } }) => {
    const { dispatch } = this.props;
    dispatch(addEmail(value));
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
    });
  };

  checkInvalidity = (email) => {
    const seis = 6;
    const { password } = this.state;
    return (!email.includes('@') || !email.includes('.com') || password.length < seis);
  };

  handleSubmit = () => {
    const { history } = this.props;
    history.push('/carteira');
  };

  render() {
    const { email } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          onChange={ this.handleEmailChange }
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          onChange={ this.handlePasswordChange }
          type="password"
          data-testid="password-input"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={ this.handleSubmit }
          disabled={ this.checkInvalidity(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Login);

// asd
