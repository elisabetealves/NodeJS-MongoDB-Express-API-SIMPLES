// config inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Forma de ler JSON / middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// rotas da API 
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// Rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({message: 'Oi express!'});
})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);


// Entregar uma porta
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.pwxle.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectando ao MongoDB')
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
})
.catch((err) => console.log(err))

