import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { connect } from 'react-redux';
import { fetchAllInstructors } from './routines';
import { instructorFields } from '../enums';
import { week } from '../enums';

const mapStateToProps = state => ({
  instructors: state.instructorsReducer.instructors,
});

export const InstructorsPage = connect(mapStateToProps, {
  fetchAllInstructors,
})(({ instructors, fetchAllInstructors }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    !instructors && fetchAllInstructors();
  }, [fetchAllInstructors]);

  useEffect(() => {
    instructors &&
      instructors.map(item => {
        item.sertificateEndDate.length === 24 &&
          (item.sertificateEndDate = new Date(
            item.sertificateEndDate
          ).toLocaleDateString());
        typeof item.categories === 'object' &&
          (item.categories = [...new Set(item.categories)].join(', '));
        typeof item.daysOff === 'object' &&
          (item.daysOff = [...new Set(item.daysOff)]
            .map(item => week[item])
            .join(', '));
        return item;
      }) &&
      setData(instructors);
  }, [instructors]);

  return <DataTable {...instructorFields} data={data} />;
});
