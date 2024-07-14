const updateUniqueItems = (map1) => {
  if (!(map1 instanceof Map))
    throw new Error('Cannot process');

  for (const [key, value] of map1) {
    if (value === 1) {
      map1.set(key, 100);
    }
  }
  return map1;
}

export default updateUniqueItems;
