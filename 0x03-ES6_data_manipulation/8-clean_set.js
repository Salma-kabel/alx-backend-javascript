// eslint-disable-next-line consistent-return
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const arr = [];
  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      arr.push(element.slice(startString.length));
    }
  }
  return arr.join('-');
}
