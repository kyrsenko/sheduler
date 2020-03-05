import React from 'react';
import { DataTable } from '../../components';

export const InstructorsPage = props => {
  const params = {
    columns: [
      { title: 'Full name', field: 'fullName' },
      { title: 'Passport', field: 'passport' },
      { title: 'Sertificate end date', field: 'sertificateEndDate' },
      { title: 'Categories', field: 'categories' },
      { title: 'Days off', field: 'daysOff' },
    ],
    data: [],
    title: 'Instructors',
  };

  return <DataTable {...params} />;
};
