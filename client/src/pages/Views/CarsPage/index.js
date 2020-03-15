import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { carFields } from '../enums';
import { connect } from 'react-redux';
import { fetchAllCars } from './routines';

const mapStateToProps = state => ({
  cars: state.carsReducer.cars,
  user: state.authReducer.user,
});

export const CarsPage = connect(mapStateToProps, {
  fetchAllCars,
})(({ cars, fetchAllCars, user }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    user && fetchAllCars({ user: { id: user._id } });
  }, [user, fetchAllCars]);

  useEffect(() => {
    cars &&
      cars.map(item => {
        item.techEndDate = new Date(
          item.techEndDate
        ).toLocaleDateString();
        
        return item;
      }) &&
      setData(cars);
  }, [cars]);
  return <DataTable {...carFields} data={data} />;
});
