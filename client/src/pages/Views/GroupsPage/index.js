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
  ({ groups, fetchAllGroups, user }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      user && fetchAllGroups({ user: { id: user._id } });
    }, [user, fetchAllGroups]);

    useEffect(() => {
      groups &&
        groups.map(item => {
          item.students = item.students.length;
          item.cars = item.cars.length;
          item.instructors = item.instructors.length;
          item.startDate = new Date(item.startDate).toLocaleDateString();
          item.endDate = new Date(item.endDate).toLocaleDateString();
          return item;
        }) &&
        setData(groups);
    }, [groups]);

    return <DataTable {...groupFields} data={data} />;
  }
);
