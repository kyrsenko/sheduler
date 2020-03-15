import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { connect } from 'react-redux';
import { studentFields } from '../enums';
import { fetchAllStudents } from './routines';

const mapStateToProps = state => ({
  students: state.studentsReducer.students,
});

export const StudentsPage = connect(mapStateToProps, { fetchAllStudents })(
  ({ students, fetchAllStudents }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      !students && fetchAllStudents();
    }, [fetchAllStudents]);

    useEffect(() => {
      students &&
        students.map(item => {
          item.dateOfBirth.length === 24 &&
            (item.dateOfBirth = new Date(
              item.dateOfBirth
            ).toLocaleDateString());
          return item;
        }) &&
        setData(students);
    }, [students]);

    return <DataTable {...studentFields} data={data} />;
  }
);
