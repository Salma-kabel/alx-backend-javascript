const weakMap = new WeakMap();

const queryAPI = (endPoint) => {
  let queries = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, queries -= -1);
  if (queries >= 5) throw new Error('Endpoint load is high');
  return queries;
};

export { weakMap, queryAPI };
