// eslint-disable-next-line consistent-return
export default function getListStudentIds(data) {
  if (!(data instanceof Array)) return [];
  return data.map((x) => x.id);
}
