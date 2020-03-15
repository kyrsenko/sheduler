import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { connect } from 'react-redux';
import { studentFields } from '../enums';
import { fetchAllStudents } from './routines';

const mapStateToProps = state => ({
  students: state.studentsReducer.students,
  user: state.authReducer.user,
});

export const StudentsPage = connect(mapStateToProps, { fetchAllStudents })(
  ({ students, fetchAllStudents, user }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      user && fetchAllStudents({ user: { id: user._id } });
    }, [user, fetchAllStudents]);

    useEffect(() => {
      students &&
        students.map(item => {
          item.dateOfBirth = new Date(item.dateOfBirth).toLocaleDateString();
          return item;
        }) &&
        setData(students);
    }, [students]);

    return <DataTable {...studentFields} data={data} />;
  }
);
