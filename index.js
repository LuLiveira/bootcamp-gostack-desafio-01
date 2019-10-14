const express = require('express');
const ProjectController = require('./src/controllers/ProjectController')

const app = express();

app.use(express.json());

app.get('/projects', ProjectController.index);

app.post('/projects', ProjectController.store);

app.post('/projects/:id/tasks', ProjectController.tasks);

app.put('/projects/:id', ProjectController.update);

app.delete('/projects/:id', ProjectController.remove);

app.listen(3000);
