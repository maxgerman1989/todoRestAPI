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

Fork/Clone
Install Node.js
Install mySQL
Install dependencies - npm install
Make sure you have the database like in db.js or configure the connection to your desired connection.
The Table name for the tasks is 'tasks' (The SQL statements are for tasks)
Run the development server - npm start.
