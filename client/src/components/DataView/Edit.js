import React from 'react';
import { useHistory } from 'react-router-dom';

export const Edit = props => {
  let history = useHistory();
  return (
    <>
      <h1>Edit</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
    </>
  );
};
