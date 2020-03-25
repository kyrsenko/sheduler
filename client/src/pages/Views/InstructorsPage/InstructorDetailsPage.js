import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInstructorById } from './routines';
import { week } from '../enums';

const mapStateToProps = state => ({
  instructor: state.instructorsReducer.instructor,
});

export const InstructorDetailsPage = connect(mapStateToProps, {
  fetchInstructorById,
})(({ instructor, fetchInstructorById }) => {
  let id = useParams();

  useEffect(() => {
    fetchInstructorById(id);
  }, [fetchInstructorById, id]);

  return (
    instructor && (
      <>
        <h2>{instructor.fullName}</h2>
        <p>{instructor.passport}</p>
        <p>{[...new Set(instructor.categories)].join(', ')}</p>
        <p>{[...new Set(instructor.daysOff)].map(item => week[item]).join(', ')}</p>
        <p>{new Date(instructor.sertificateEndDate).toLocaleDateString()}</p>
      </>
    )
  );
});
