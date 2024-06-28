const express = require('express');
const app = express();

const configureRoutes = require('./routes/Index');
app.listen(3000);
configureRoutes(app);

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
    const libro = require('./lib/books');
    const pregunta = await askQuestion('¿Qué libro buscas? ');
    libro(pregunta); // Asegúrate de invocar correctamente la función o módulo "libro"
})();

app.get('/', (req, res) => {
    res.send('Welcome to my library');
});

app.post('/usuarios', (req, res) => {
    res.send('Información de usuario recibida y procesada');
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Solicitado usuario con ID: ${id}`);
});
