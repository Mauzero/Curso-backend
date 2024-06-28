const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    // console.log(`Servidor corriendo en el puerto ${port}`);
});


const readline = require('readline');

const myRl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (message) => {
    return new Promise((resolve, reject) => {
        myRl.question(message, (answer) => {
            answer ? resolve(answer) : reject('There was some issue');
        });
    });
};

(async () => {
    const libro = require('./task');
    const pregunta = await askQuestion('¿Qué libro buscas? ');
    libro(pregunta);
})();

app.get('/', (req, res) => {
    res.send('Welcome to my library');
});

const tasks =require('./task') ;
// Crear una tarea
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.json(newTask);
});

// Obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Obtener una tarea por ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        res.json(task);
    }
});

// Actualizar una tarea por ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    const existingTaskIndex = tasks.findIndex((t) => t.id === taskId);
    if (existingTaskIndex === -1) {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        tasks[existingTaskIndex] = { ...tasks[existingTaskIndex], ...updatedTask };
        res.json(tasks[existingTaskIndex]);
    }
});

// Eliminar una tarea por ID
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const existingTaskIndex = tasks.findIndex((t) => t.id === taskId);
    if (existingTaskIndex === -1) {
        res.status(404).json({ error: 'Tarea no encontrada' });
    } else {
        const deletedTask = tasks.splice(existingTaskIndex, 1);
        res.json(deletedTask[0]);
    }
});
