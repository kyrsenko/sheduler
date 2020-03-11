import React from 'react';
import { DataTable } from '../../../components';

export const CarsPage = props => {
  const params = {
    columns: [
      { title: 'Brand', field: 'brand' },
      { title: 'Government number', field: 'govNumber' },
      { title: 'Tech end date', field: 'techEndDate' },
      { title: 'Category', field: 'category' },
      { title: 'Active', field: 'active' },
    ],
    data: [],
    title: 'Cars',
  };

  return <DataTable {...params} />;
};
