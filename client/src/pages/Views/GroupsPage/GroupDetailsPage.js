import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGroupById } from './routines';

const mapStateToProps = state => ({
  group: state.groupsReducer.group,
});

export const GroupDetailsPage = connect(mapStateToProps, {
  fetchGroupById,
})(({ group, fetchGroupById }) => {
  let id = useParams();

  useEffect(() => {
    fetchGroupById(id);
  }, [fetchGroupById, id]);

  return (
    group && (
      <>
        <h2>{group.name}</h2>
        <p>{group.govNumber}</p>
        <p>{group.category}</p>
        <p>{group.active ? 'active' : 'not active'}</p>
        <p>{new Date(group.startDate).toLocaleDateString()}</p>
        <p>{new Date(group.endDate).toLocaleDateString()}</p>
      </>
    )
  );
});
