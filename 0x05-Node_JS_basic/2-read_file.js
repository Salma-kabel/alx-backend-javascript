const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const numStudents = students.length;
    console.log(`Number of students: ${numStudents}`);

    headers.forEach((field) => {
      const fieldStudents = students.filter((student) => {
        const values = student.split(',');
        return values[headers.indexOf(field)].trim() !== '';
      });

      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.map((s) => s.split(',')[0]).join(', ')}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
