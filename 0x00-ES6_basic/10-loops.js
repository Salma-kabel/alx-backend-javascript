export default function appendToEachArrayValue(array, appendString) {
  for (element of array) {
    let value = element;
    element = appendString + value;
  }

  return array;
}
