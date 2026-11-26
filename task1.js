function pickPropArray(arr, prop) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (prop in item) {
      result.push(item[prop]);
    }
  }

  return result;
}

const students = [
  { name: 'Павел', age: 20 },
  { name: 'Иван', age: 20 },
  { name: 'Эдем', age: 20 },
  { name: 'Денис', age: 20 },
  { name: 'Виктория', age: 20 },
  { age: 40 },
];

console.log(pickPropArray(students, 'name'));