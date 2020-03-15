import React, { useEffect, useState } from 'react';
import { DataTable } from '../../../components';
import { carFields } from '../enums';
import { connect } from 'react-redux';
import { fetchAllCars } from './routines';

const mapStateToProps = state => ({
  cars: state.carsReducer.cars,
});

export const CarsPage = connect(mapStateToProps, {
  fetchAllCars,
})(({ cars, fetchAllCars }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    !cars && fetchAllCars();
  }, [fetchAllCars]);

  useEffect(() => {
    cars &&
      cars.map(item => {
        item.techEndDate.length === 24 &&
          (item.techEndDate = new Date(item.techEndDate).toLocaleDateString());
        return item;
      }) &&
      setData(cars);
  }, [cars]);
  return <DataTable {...carFields} data={data} />;
});
