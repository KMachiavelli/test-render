const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.postStudent);
router
  .route("/:id")
  .get(controller.getStudentById)
  .delete(controller.deleteStudent)
  .put(controller.updateStudent);

module.exports = router;
