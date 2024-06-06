const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const header = lines.shift(); 
    const studentFields = lines.map((line) => {
      const [firstName, lastName, , field] = line.split(',');
      return { firstName, lastName, field };
    });

    const fields = new Set(studentFields.map((student) => student.field));
    const fieldCounts = {};

    studentFields.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = 0;
      }
      fieldCounts[student.field]++;
    });

    stream.write(`Number of students: ${studentFields.length}\n`);

    Object.keys(fieldCounts).forEach((field) => {
      const studentsInField = studentFields
        .filter((student) => student.field === field)
        .map((student) => student.firstName)
        .join(', ');

      stream.write(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentsInField}\n`);
    });
  } else {
    throw new Error('Database file not found');
  }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname)

module.exports = app;
