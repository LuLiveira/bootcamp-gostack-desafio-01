const express = require('express');
const ProjectController = require('./src/controllers/ProjectController')

const app = express();

var cont = 0;

function contador(request, response, next){
    ++cont;
    console.log(cont);
    return next();
}

app.use(express.json());

app.get('/projects', contador, ProjectController.index);

app.post('/projects', contador, ProjectController.store);

app.post('/projects/:id/tasks', contador, ProjectController.tasks);

app.put('/projects/:id', contador, ProjectController.update);

app.delete('/projects/:id', contador, ProjectController.remove);

app.listen(3000);
