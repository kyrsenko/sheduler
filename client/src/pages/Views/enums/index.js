export const studentFields = {
  columns: [
    { title: 'Full name', field: 'fullName' },
    { title: 'Passport', field: 'passport' },
    { title: 'Date of birth', field: 'dateOfBirth', type: 'string' },
  ],
  title: 'Students',
  path: 'students',
};

export const groupFields = {
  columns: [
    { title: 'Group number', field: 'name' },
    { title: 'Start', field: 'startDate' },
    { title: 'End', field: 'endDate' },
    {
      title: 'Students',
      field: 'students',
    },
    {
      title: 'Instructors',
      field: 'instructors',
    },
    {
      title: 'Cars',
      field: 'cars',
    },
  ],
  title: 'Groups',
  path: 'groups',
};

export const instructorFields = {
  columns: [
    { title: 'Full name', field: 'fullName' },
    { title: 'Passport', field: 'passport' },
    { title: 'Sertificate end date', field: 'sertificateEndDate' },
    { title: 'Categories', field: 'categories' },
    { title: 'Days off', field: 'daysOff' },
  ],
  title: 'Instructors',
  path: 'instructors',
};

export const carFields = {
  columns: [
    { title: 'Brand', field: 'brand' },
    { title: 'Government number', field: 'govNumber' },
    { title: 'Tech end date', field: 'techEndDate' },
    { title: 'Category', field: 'category' },
    { title: 'Active', field: 'active' },
  ],
  title: 'Cars',
  path: 'cars',
};

export const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
