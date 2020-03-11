import React from 'react';
import { DataTable } from '../../../components';
import makeData from './makeData';

export const InstructorsPage = props => {
  const data = React.useMemo(() => makeData(100), []);

  const params = {
    columns: [
      { title: 'Full name', field: 'fullName' },
      { title: 'Passport', field: 'passport' },
      { title: 'Sertificate end date', field: 'sertificateEndDate' },
      { title: 'Categories', field: 'categories' },
      { title: 'Days off', field: 'daysOff' },
    ],
    data,
    title: 'Instructors',
    path: 'instructors',
  };

  return <DataTable {...params} />;
};
