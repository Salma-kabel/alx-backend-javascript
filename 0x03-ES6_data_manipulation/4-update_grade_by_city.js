export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((x) => x.location === city)
    .map((std) => {
      const grades = newGrades.filter((x) => x.studentId === std.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...std,
        grade,
      };
    });
}
