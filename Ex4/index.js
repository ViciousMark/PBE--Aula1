const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ error: 'Dados inválidos. Envie nome e preço válido.' });
    }


    let aumento = preco < 1000 ? 0.05 : 0.07;
    let novoPreco = preco * (1 + aumento);

    res.json({
        mercadoria: nome,
        novoPreco: novoPreco.toFixed(2)
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
