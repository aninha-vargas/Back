
require('./db/mogodb');
const produtoModel = require('./models/produtoModel');
const express = require('express');
const morgan = require('morgan');
// const produtos = require('./produtos.json');


// var produto = {
//     'nome': 'Smartfone',
//     'desc': 'Google Pixel',
//     'preco': 4000
// };

// async function gravarDados() {
//     var resultado = await produtoModel.create(produto);
//     console.log(resultado);
// }
// gravarDados();

// module.exports = db;



const servidor = express();
servidor.use(morgan('dev'));
servidor.use(express.urlencoded({'extended': true}));
servidor.use(express.json());

function get(req, res){
    res.send('Servidor Express (GET)...');

}

// function getProdutos(req, res){
//     res.json(produtos);
// }

servidor.get('/', get);
// servidor.get('/produtos', getProdutos)
servidor.get('/produtos', async (req, res) => {
    var produtos = await produtoModel.find({});
    res.json(produtos);
    
});

function log(){
    console.log('Servidor Express rodando na porta 3000...');
}

servidor.listen(3000, log);