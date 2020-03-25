import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStudentById } from './routines';

const mapStateToProps = state => ({
  student: state.studentsReducer.student,
});

export const StudentDetailsPage = connect(mapStateToProps, {
  fetchStudentById,
})(({ student, fetchStudentById }) => {

  let id = useParams();

  useEffect(() => {
    fetchStudentById(id);
  }, [fetchStudentById, id]);

  return (
    student && (
      <>
        <h2>{student.fullName}</h2>
        <p>{student.passport}</p>
        <p>{new Date(student.dateOfBirth).toLocaleDateString()}</p>
      </>
    )
  );
});
