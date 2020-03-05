import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';

export const DataTable = ({ columns, data, name, actions = {} }) => {
  const [state, setState] = useState({
    columns,
    data,
  });
  let history = useHistory();

  return (
    <MaterialTable
      options={{
        grouping: true,
      }}
      actions={[
        {
          icon: 'visibility',
          tooltip: 'Details',
          onClick: (event, rowData) => {
            history.push('/login');
          },
        },
      ]}
      onRowClick={(evt, selectedRow) => history.push('/registration')}
      title={name}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
};
