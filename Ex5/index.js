const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/numeros', (req, res) => {
    const { numeros } = req.body;

    
    if (!Array.isArray(numeros) || numeros.length !== 6 || !numeros.every(num => Number.isInteger(num))) {
        return res.status(400).json({ error: 'Envie um array com exatamente 6 números inteiros.' });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({
        maiorNumero
    });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:`);
});
