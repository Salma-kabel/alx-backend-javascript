export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const arr1 = new ArrayBuffer(length);
  const view = new DataView(arr1, 0, length);
  const list1 = new Int8Array(arr1);
  list1[position] = value;
  return view;
}
