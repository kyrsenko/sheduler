import React from 'react';
import { useHistory } from 'react-router-dom';

export const Details = props => {
  let history = useHistory();
  return (
    <>
      <h1>Details</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
    </>
  );
};
