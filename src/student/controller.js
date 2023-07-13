const { pool } = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.GET_STUDENTS, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  pool.query(
    queries.GET_SUTDENT_BY_ID,
    [(id = parseInt(req.params.id))],
    (err, results) => {
      if (err) throw err;
      res.status(200).json(results.rows);
    }
  );
};

const postStudent = (req, res) => {
  const { name, email, dob, age } = req.body;

  pool.query(queries.CHECK_EMAIL_EXISTS, [email], (err, results) => {
    if (err) throw err;

    if (results?.rows?.length) {
      res.send("email already taken");
    } else {
      pool.query(
        queries.CREATE_STUDENT,
        [name, email, age, dob],
        (err, results) => {
          if (err) throw err;
          res.status(201).send("student saved");
        }
      );
    }
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  pool.query(queries.DELETE_STUDENT, [id], (err, results) => {
    if (err) throw err;
    !results.rows.length && res.send("didnt find such student");
    res.status(202).send("student deleted");
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(req.body);
  pool.query(queries.GET_SUTDENT_BY_ID, [id], (err, results) => {
    if (!results.rows.length) {
      res.send("Student wasnt found");
    } else {
      pool.query(queries.UPDATE_STUDENT, [id, name], (err, results) => {
        if (err) throw err;
        res.send("student updated");
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentById,
  postStudent,
  deleteStudent,
  updateStudent,
};
