import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import TablePagination from '@material-ui/core/TablePagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { useStyles } from './styles';

export const DataTable = ({ path, columns, data, title, actions = {} }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    columns,
    data,
  });

  useEffect(() => {
    setState({ ...state, data });
  }, [data]);

  let history = useHistory();
  return (
    <>
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
              history.push(`${history.location.pathname}/${rowData._id}`);
            },
          },
          {
            icon: 'edit',
            tooltip: 'Edit',
            onClick: (event, rowData) => {
              history.push(`/${path}/edit/${rowData._id}`);
            },
          },
          {
            icon: 'delete',
            tooltip: 'Delete',
            onClick: (event, rowData) => {
              history.push(`/${path}/${rowData._id}`);
            },
          },
        ]}
        onRowClick={(evt, selectedRow) =>
          history.push(`${history.location.pathname}/${selectedRow._id}`)
        }
        title={title}
        columns={state.columns}
        data={state.data}
      />
      <Tooltip title="Add" aria-label="add">
        <Fab
          color="default"
          className={classes.absolute}
          onClick={() => {
            history.push(`/${path}/create`);
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};
