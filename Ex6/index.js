const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;

    // Validação: deve ser um array com exatamente 5 números inteiros
    if (!Array.isArray(numeros) || numeros.length !== 5 || !numeros.every(num => Number.isInteger(num))) {
        return res.status(400).json({ error: 'Envie um array com exatamente 5 números inteiros.' });
    }

    // Ordenar os números em ordem crescente
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({
        numerosOrdenados
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
