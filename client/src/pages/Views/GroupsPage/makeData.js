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
    name: namor.generate({ words: 1, saltLength: 0, separator: ' ' }),
    passport: namor.generate({ words: 1, saltLength: 4, saltType: 'number' }),
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    students: Math.floor((Math.random() + 1) * 20),
    instructors: Math.floor((Math.random() + 1) * 5),
    cars: Math.floor((Math.random() + 1) * 3),
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
