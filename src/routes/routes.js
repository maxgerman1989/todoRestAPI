var express = require("express");
var router = express.Router();
var controller = require("../controllers/controller");

//routing for all requets under /tasks
router
  .route("/tasks")
  /**
   * POST
   * parameters expected in the req.body:
   * title: string,
   * body: string,
   * date: string --> "yyyy-mm-dd"
   * state: int --> 0,1,2
   * response expected:
   * if the request succeed the response is 201 with the object that was sent. if failed, status sent accordingly.
   */
  .post(controller.add_task)
  /**
   * GET
   * no parameters expected in the req.
   * if the request succeed the response is 200 with all the tasks. if failed, status sent accordingly.
   */
  .get(controller.get_all_tasks);

//routing for all requets under /tasks/:id
router
  .route("/tasks/:id")
  /**
   * DELETE
   * parameters expected in the req.params:
   * id: string,
   * if the request succeed the response is 200 with message with the deleted id. if failed, status sent accordingly.
   */
  // response value if success is 200 with message with the deleted id. if failed, status sent accordingly.
  .delete(controller.delete_task)
  /**
   * PUT
   * parameters expected in the req.body:
   * title: string,
   * body: string,
   * date: string --> "yyyy-mm-dd"
   * state: int --> 0,1,2
   * response expected:
   * if the request succeed the response is 200 with message with the updated id. if failed, status sent accordingly.
   */
  .put(controller.update_task);

module.exports = router;
