import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgotPassword } from '../../redux/actions/user.actions';
import Alert from '../../components/layout/Alert';

const initialState = {
  email: ''
};

const ForgotPassword = ({ loading, forgotPassword }) => {
  const [formData, setformData] = useState(initialState);
  const { email } = formData;

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email es inválido').required('Email requerido')
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData)
      .then(function (data) {
        forgotPassword(data.email);
      })
      .catch(function (error) {
        console.log(error.errors);
      });
  };

  return (
    <div className='container d-flex flex-column my-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='text-center'>
            <h1 className='display-4 mb-3'>Recuperar Contraseña</h1>
          </div>
          <Alert />
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                className='form-control'
                type='email'
                placeholder='name@example.com'
                name='email'
                value={email}
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className='form-group'>
              <button className='btn btn-lg btn-block btn-primary mb-3' disabled={loading}>
                {loading && <span className='spinner-border spinner-border-sm mr-1'></span>}Enviar
              </button>
              <p className='text-center'>
                <small className='text-muted'>
                  <Link to='/login'>Cancelar</Link>
                </small>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  forgotPassword: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading
});

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
