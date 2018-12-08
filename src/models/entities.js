// Task class.
class Task {
  constructor(title, body, due_date, state, is_deleted) {
    this.title = title;
    this.body = body;
    this.due_date = due_date;
    this.state = state;
    this.is_deleted = is_deleted;
  }
}

//ENUM for the 3 required states: pedning, in progress, and done. users must provide in thier json the state as int 0,1,2.
const stateEnum = {
  PENDING: 0,
  IN_PROGRESS: 1,
  DONE: 2
};

module.exports = { Task, stateEnum };
