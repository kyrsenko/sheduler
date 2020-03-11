import React from 'react';
import { DataTable } from '../../../components';
import makeData from './makeData';

export const GroupsPage = props => {
  const data = React.useMemo(() => makeData(100), []);

  const params = {
    columns: [
      { title: 'Group number', field: 'name' },
      { title: 'Start', field: 'startDate' },
      { title: 'End', field: 'endDate' },
      {
        title: 'Students',
        field: 'students',
      },
      {
        title: 'Instructors',
        field: 'instructors',
      },
      {
        title: 'Cars',
        field: 'cars',
      },
    ],
    data,
    title: 'Groups',
    path: 'groups',
  };

  return <DataTable {...params} />;
};
