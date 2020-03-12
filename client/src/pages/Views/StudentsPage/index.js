import React from 'react';
import { DataTable } from '../../../components';
import makeData from './makeData';

export const StudentsPage = props => {
  const data = React.useMemo(() => makeData(200), []);

  const params = {
    columns: [
      { title: 'Full name', field: 'fullName' },
      { title: 'Passport', field: 'passport' },
      { title: 'Date of birth', field: 'dateOfBirth', type: 'string' },
      {
        title: 'Group',
        field: 'group',
      },
    ],
    data,
    title: 'Students',
    path: 'students',
  };

  return <DataTable {...params} />;
};
