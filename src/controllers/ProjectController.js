const projects = [];

module.exports = {

    store(request, response) {
        const { id, title } = request.body;

        projects.push({
            id,
            title,
            tasks: [],
        });
        return response.status(201).json({ message: `O projeto '${title}' foi cadastrado com sucesso!` });
    },

    index(request, response) {
        return response.status(200).json(projects);
    },


    update(request, response) {
        const { id } = request.params;
        const { title } = request.body;

        projects.forEach(project => {
            if(project.id == id){
                project.title = title;
            }
        });
        return response.status(200).json(projects);

    },
    remove(request, response) {
        const { id } = request.params;

        projects.splice(id, 1);
        projects.forEach(project => {
            if(project.id == id)
                projects.splice(project.index, 1);
            else
                return response.status(400).json({ message: 'User does not exist'});
        });
        return response.status(200).send();
    },

    tasks(request, response){
        const { id } = request.params;
        const { title } = request.body;

        projects.forEach(project => {
            if(project.id == id){
                project.tasks.push(title);
                return response.status(200).json(project);        
            }
            else {
                return response.status(400).json({ message: 'User does not exist'});
            }
        });
    }
}


