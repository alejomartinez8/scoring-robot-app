import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className='container-fluid px-3'>
      <div className='row min-vh-100'>
        <div className='col-md-5 col-lg-6 col-xl-4 px-lg-5 d-flex align-items-center'>
          <div className='w-100 py-5'>
            <div className='text-center'>
              <h1 className='display-4 mb-3'>Restablecer Contraseña</h1>
            </div>

            <form>
              <div className='form-group'>
                <label htmlFor='password'>Constraseña</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Nueva contraseña'
                  name='password'
                  required
                ></input>
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Confirmar Constraseña</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Confirmar contraseña'
                  name='confirmPassword'
                  required
                ></input>
              </div>
              <div className='form-group'>
                <button className='btn btn-lg btn-block btn-primary mb-3'>Enviar</button>
                <p className='text-center'>
                  <small className='text-muted'>
                    <Link to='/login'>Cancelar</Link>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className='col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block landing'></div>
      </div>
    </div>
  );
};

export default ResetPassword;
