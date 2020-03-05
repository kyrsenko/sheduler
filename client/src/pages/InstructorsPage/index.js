import React from 'react';
import { DataTable } from '../../components';

export const InstructorsPage = props => {
  const params = {
    columns: [
      { title: 'Full name', field: 'fullName' },
      { title: 'Passport', field: 'passport' },
      { title: 'Date of birth', field: 'dateOfBirth', type: 'string' },
      {
        title: 'Group',
        field: 'group',
        lookup: { 1: '1', 2: '2', 3: '3' },
      },
    ],
    data: [
      {
        fullName: 'Ivanov Sergii',
        passport: 'СК234567',
        dateOfBirth: '30.04.1960',
        group: 1,
      },
      {
        fullName: 'Ivanov Oleksandr',
        passport: 'СК345678',
        dateOfBirth: '20.02.1980',
        group: 3,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
      {
        fullName: 'Ivanov Ivan',
        passport: 'СК123456',
        dateOfBirth: '10.02.1970',
        group: 2,
      },
    ],
    title: 'Instructors',
  };

  return <DataTable {...params} />;
};
