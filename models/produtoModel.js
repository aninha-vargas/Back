//Arquivo: ./models/produtomodel.js
//Importa o mongoose
const mongoose = require('mongoose');

//Define o schema
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    nome: String,
    desc: String,
    preco: Number
});

//Cria o modelo
module.exports = mongoose.model('produto', produtoSchema);