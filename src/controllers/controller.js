const Joi = require("joi");
const entities = require("../models/entities");
const db = require("../db/db");

//Adding task to the DB.
exports.add_task = function(req, res) {
  const { error } = validateTask(req.body);
  if (error) {
    console.error(error);
    res.status(400).send(error);
    return;
  }
  const { title, body, due_date, state } = req.body;
  let task = new entities.Task(title, body, new Date(due_date), state, false);
  let sql = "INSERT INTO tasks SET ?";
  let query = db.query(sql, task, (err, result) => {
    if (err) {
      console.error("Failed to add new task. ex: " + err);
      res.status(500).send("Failed to add task to the DB.");
      return;
    }
    console.info("Added succefully task with id: " + result.insertId);
    res.status(201).send(task);
    return;
  });
};

//Updating a task in the db.
exports.update_task = function(req, res) {
  const { error } = validateTask(req.body);
  if (error) {
    res.status(400).send(error);
    return;
  }
  const { title, body, due_date, state } = req.body;
  let msg;
  let sql = `UPDATE tasks SET title = '${title}', body = '${body}', due_date = DATE('${due_date}'), state = '${state}' WHERE id = ${
    req.params.id
  }`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      msg = `Failed to update task with id: ${req.params.id}. ex: ${err}`;
      console.error(msg);
      res.status(500).send(msg);
      return;
    }
    if (!result.affectedRows) {
      msg = "There is no task with id: " + req.params.id;
      console.error(msg);
      res.status(404).send(msg);
      return;
    }
    msg = "Updated succefully task with id: " + req.params.id;
    console.info(msg);
    res.send(msg);
    return;
  });
};

//deleting a task. becuase there is a requirement to list all the tasks with the deleted tasks, the sql action is updating the is_deleted column to 1.
//if the task is aleady "deleted" the response will be not found.
exports.delete_task = function(req, res) {
  let sql = `UPDATE tasks SET is_deleted = 1 WHERE id = ${
    req.params.id
  } AND is_deleted = 0`;
  let msg;
  let query = db.query(sql, (err, result) => {
    if (err) {
      msg = `Failed to delete task with id: ${req.params.id}. ex: ${err}`;
      console.error(msg);
      res.status(500).send(msg);
      return;
    }
    if (!result.affectedRows) {
      console.log(result);
      msg = "There is no task with the given id.";
      console.error(msg);
      res.status(404).send(msg);
      return;
    }
    msg = `Succefully deleted task with id: ${req.params.id}`;
    console.info(msg);
    res.send(msg);
    return;
  });
};

//fetching all tasks in DB.
exports.get_all_tasks = function(req, res) {
  let msg;
  let sql = "SELECT * FROM tasks";
  db.query(sql, function(err, result) {
    if (err) {
      msg = `Failed to get all tasks. ex: ${err}`;
      console.error(msg);
      res.status(500).send(msg);
      return;
    }
    console.log(result);
    res.send(result);
  });
};

//Validation function that validates the task object using Joi.
function validateTask(task) {
  const schema = {
    title: Joi.string().required(),
    body: Joi.string().required(),
    due_date: Joi.string().required(),
    state: Joi.number() //state must be 0,1,2.
      .valid(
        entities.stateEnum.PENDING,
        entities.stateEnum.IN_PROGRESS,
        entities.stateEnum.DONE
      )
      .required()
  };

  return Joi.validate(task, schema);
}
