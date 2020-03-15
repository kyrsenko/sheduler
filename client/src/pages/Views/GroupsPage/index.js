import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { connect } from 'react-redux';
import { groupFields } from '../enums';
import { fetchAllGroups } from './routines';

const mapStateToProps = state => ({
  groups: state.groupsReducer.groups,
  user: state.authReducer.user,
});

export const GroupsPage = connect(mapStateToProps, { fetchAllGroups })(
  ({ groups, fetchAllGroups }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      !groups && fetchAllGroups();
    }, [fetchAllGroups]);

    useEffect(() => {
      groups &&
        groups.map(item => {
          typeof item.students === 'object' &&
            (item.students = item.students.length);
          typeof item.cars === 'object' && (item.cars = item.cars.length);
          typeof item.instructors === 'object' &&
            (item.instructors = item.instructors.length);
          item.startDate.length === 24 &&
            (item.startDate = new Date(item.startDate).toLocaleDateString());
          item.endDate.length === 24 &&
            (item.endDate = new Date(item.endDate).toLocaleDateString());
          return item;
        }) &&
        setData(groups);
    }, [groups]);

    return <DataTable {...groupFields} data={data} />;
  }
);
