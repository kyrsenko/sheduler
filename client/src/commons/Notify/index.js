import React from 'react';
import { toast } from '../../../node_modules/react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

export const Notify = ({ type, message }) => (
  <span style={{ display: 'none' }}>{toast[type](message)}</span>
);
