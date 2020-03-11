import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import TablePagination from '@material-ui/core/TablePagination';

export const DataTable = ({ path, columns, data, title, actions = {} }) => {
  const [state, setState] = useState({
    columns,
    data,
  });
  let history = useHistory();
  return (
    <MaterialTable
      components={{
        Pagination: props => {
          return (
            <>
              <TablePagination
                {...props}
                rowsPerPageOptions={[
                  5,
                  10,
                  30,
                  { label: 'All', value: props.count },
                ]}
              />
            </>
          );
        },
      }}
      options={{
        grouping: true,
      }}
      actions={[
        {
          icon: 'visibility',
          tooltip: 'Details',
          onClick: (event, rowData) => {
            history.push(`${history.location.pathname}/${rowData.id}`);
          },
        },
        {
          icon: 'edit',
          tooltip: 'Edit',
          onClick: (event, rowData) => {
            history.push(`/${path}/edit/${rowData.id}`);
          },
        },
        {
          icon: 'delete',
          tooltip: 'Delete',
          onClick: (event, rowData) => {
            history.push(`/${path}/${rowData.id}`);
          },
        },
      ]}
      onRowClick={(evt, selectedRow) =>
        history.push(`${history.location.pathname}/${selectedRow.id}`)
      }
      title={title}
      columns={state.columns}
      data={state.data}
    />
  );
};
