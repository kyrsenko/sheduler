import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const data = () => {
  return {
    fullName: namor.generate({ words: 1, saltLength: 0, separator: ' ' }),
    passport: namor.generate({ words: 1, saltLength: 4, saltType: 'number' }),
    sertificateEndDate: new Date().toLocaleDateString(),
    categories: 'A, B, C',
    daysOff: '1, 2, 3',
    id: Math.floor((Math.random() + 1) * 100000),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...data(),
      };
    });
  };

  return makeDataLevel();
}
