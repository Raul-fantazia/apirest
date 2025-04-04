const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoutes = require('./Routes/UserRoutes');


dotenv.config();

const app = express();
const port = 8000;

//middleware para criar usuarios usando o json
app.use(express.json());

// conectando ao banco de dados 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar' , err));


    app.get('/', (req,res) => {
        res.send('Salve');
});


    app.use('/usuarios', UserRoutes);


    app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`);
});


