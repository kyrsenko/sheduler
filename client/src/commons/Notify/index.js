import React from 'react';
import { connect } from 'react-redux';

import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

const mapStateToProps = state => ({
  ...state.commonsReducer,
});

export const Notify = connect(mapStateToProps)(props => {
  const { type, message, errors } = props;

  return (
    <>
      {errors ? (
        errors.map(element => {
          return (
            <span key={element} style={{ display: 'none' }}>
              {toast['error'](element.msg)}
            </span>
          );
        })
      ) : message && type ? (
        <span style={{ display: 'none' }}>{toast[type](message)}</span>
      ) : null}
    </>
  );
});
