# todoRestAPI


# Introduction
this is a simple rest api for a todo list.

# API Reference and Resource Type


| Method  | HTTP Request | Description
| ------------- | ------------- | -------------
| add_task  | POST /tasks  | Creates a new task.
| update_task  | PUT /tasks/:id  | Updates an exisiting task.
| delete_task  | DELETE /tasks/:id  | Deletes an exisiting task.
| get_all_tasks  | GET /tasks  | Returns all the tasks (including deleted).

more info about expected parameters and expected responses can be found at routes.js

# Get started
To be able to run this project, you need the following

1. Clone
2. Install Node.js
3. Install mySQL
4. Install dependencies - npm install
5. Make sure you have the database like in db.js or configure the connection to your desired connection.
6. The Table name for the tasks is 'tasks' (id - INT, title - NAVCHAR, body - NAVCHAR, due_date - DATE, state - INT, is_deleted - TINYINT(1)) - id is the PK and its Auto-Incremented. all the columns are Not-Nullable.
7. Run the development server - npm start.
8. I used postman to test the requests.
