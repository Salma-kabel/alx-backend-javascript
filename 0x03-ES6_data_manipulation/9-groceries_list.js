export default function groceriesList() {
  const list1 = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const map1 = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const element of list1) {
    map1.set(element[0], element[1]);
  }
  return map1;
}
