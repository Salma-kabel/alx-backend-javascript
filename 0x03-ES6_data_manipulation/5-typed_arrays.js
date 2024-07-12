export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const arr1 = new ArrayBuffer(length);
  const view = new DataView(arr1, 0, length);
  const arr = new Int8Array(arr1);
  arr[position] = value;
  return view;
}
