import React from 'react';
import { DataTable } from '../../components';

export const GroupsPage = props => {
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
    data: [
      {
        name: '1',
        startDate: '05.03.2020',
        endDate: '05.05.2020',
        students: 20,
        instructors: 5,
        cars: 3,
      },
      {
        name: '2',
        startDate: '15.03.2020',
        endDate: '15.05.2020',
        students: 25,
        instructors: 6,
        cars: 3,
      },
      {
        name: '3',
        startDate: '05.04.2020',
        endDate: '05.07.2020',
        students: 20,
        instructors: 5,
        cars: 3,
      },
      {
        name: '4',
        startDate: '15.04.2020',
        endDate: '15.07.2020',
        dateOfBirth: '10.02.1970',
        students: 15,
        instructors: 3,
        cars: 2,
      },
      {
        name: '5',
        startDate: '05.05.2020',
        endDate: '05.08.2020',
        dateOfBirth: '10.02.1970',
        students: 30,
        instructors: 6,
        cars: 3,
      },
      {
        name: '6',
        startDate: '15.05.2020',
        endDate: '15.08.2020',
        students: 35,
        instructors: 7,
        cars: 4,
      },
      {
        name: '7',
        startDate: '05.06.2020',
        endDate: '05.09.2020',
        students: 10,
        instructors: 2,
        cars: 1,
      },
      {
        name: '8',
        startDate: '15.06.2020',
        endDate: '15.09.2020',
        students: 17,
        instructors: 3,
        cars: 2,
      },
    ],
    title: 'Groups',
  };

  return <DataTable {...params} />;
};
