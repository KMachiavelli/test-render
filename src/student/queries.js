const GET_STUDENTS = "SELECT * FROM students";
const GET_SUTDENT_BY_ID = `SELECT * FROM students WHERE id = $1`;
const CHECK_EMAIL_EXISTS = "SELECT s FROM students s WHERE s.email = $1";
const CREATE_STUDENT =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const DELETE_STUDENT = "DELETE from students WHERE id = $1";
const UPDATE_STUDENT = "UPDATE students SET name=$2 WHERE id = $1";

module.exports = {
  GET_STUDENTS,
  GET_SUTDENT_BY_ID,
  CHECK_EMAIL_EXISTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
};
