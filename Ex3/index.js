const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;

    if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) {
        return res.status(400).json({ error: 'Lados inválidos.' });
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return res.status(400).json({ error: 'Não forma um triângulo.' });
    }

    let tipo;
    if (a === b && b === c) {
        tipo = 'EQUILÁTERO';
    } else if (a === b || a === c || b === c) {
        tipo = 'ISÓSCELES';
    } else {
        tipo = 'ESCALENO';
    }

    res.json({ tipo });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
