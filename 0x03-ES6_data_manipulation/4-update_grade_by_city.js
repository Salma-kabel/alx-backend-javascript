export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((x) => x.location === city)
    .map((person) => {
      const grades = newGrades.filter((x) => x.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
