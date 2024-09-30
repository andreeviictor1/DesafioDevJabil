const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/Users/register', (req, res) => {
    // Lógica para registrar usuário
    res.json({ message: 'Usuário registrado com sucesso', user: req.body });
});

app.post('/api/Users/login', (req, res) => {
    // Lógica para login de usuário
    res.json({ message: 'Usuário logado com sucesso', user: req.body });
});

app.get('/api/Users/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para obter usuário por ID
    res.json({ message: `Usuário com ID ${id}`, user: {} });
});

app.put('/api/Users/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para atualizar usuário
    res.json({ message: `Usuário com ID ${id} atualizado`, user: req.body });
});

app.delete('/api/Users/:id', (req, res) => {
    const { id } = req.params;
    // Lógica para deletar usuário
    res.json({ message: `Usuário com ID ${id} deletado` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
