import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from './routines';

const mapStateToProps = state => ({
  car: state.carsReducer.car,
});

export const CarDetailsPage = connect(mapStateToProps, {
  fetchCarById,
})(({ car, fetchCarById }) => {
  let id = useParams();

  useEffect(() => {
    fetchCarById(id);
  }, [fetchCarById, id]);

  return (
    car && (
      <>
        <h2>{car.brand}</h2>
        <p>{car.govNumber}</p>
        <p>{car.category}</p>
        <p>{car.active ? 'working' : 'not working'}</p>
        <p>{new Date(car.techEndDate).toLocaleDateString()}</p>
      </>
    )
  );
});
