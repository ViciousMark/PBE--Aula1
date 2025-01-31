const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/desconto', (req, res) => {
    const { salario } = req.body;

    if (!salario || typeof salario !== 'number') {
        return res.status(400).json({ error: 'Salário inválido ou não fornecido.' });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14; 
    }

    const salarioFinal = salario - desconto;

    res.json({
        salarioOriginal: salario.toFixed(2),
        desconto: desconto.toFixed(2),
        salarioFinal: salarioFinal.toFixed(2),
    });
});


app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
