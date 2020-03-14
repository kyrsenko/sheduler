import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { connect } from 'react-redux';
import { fetchAllInstructors } from './routines';
import { instructorFields } from '../enums';
import { week } from '../enums';

const mapStateToProps = state => ({
  instructors: state.instructorsReducer.instructors,
  user: state.authReducer.user,
});

export const InstructorsPage = connect(mapStateToProps, {
  fetchAllInstructors,
})(({ instructors, fetchAllInstructors, user }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    user && fetchAllInstructors({ user: { id: user._id } });
  }, [user, fetchAllInstructors]);

  useEffect(() => {
    instructors &&
      instructors.map(item => {
        item.sertificateEndDate = new Date(
          item.sertificateEndDate
        ).toLocaleDateString();
        item.categories = [...new Set(item.categories)].join(', ');
        item.daysOff = [...new Set(item.daysOff)]
          .map(item => week[item])
          .join(', ');
        return item;
      }) &&
      setData(instructors);
  }, [instructors]);

  return <DataTable {...instructorFields} data={data} />;
});
