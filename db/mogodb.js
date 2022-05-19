const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/mongodbquartanoite';

// const db = mongoose.connect(URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

mongoose.connect(URL);  //conecção com mongo

const con = mongoose.connection;

con.on('open', function(){
  console.log('Conectado ao MongoDB!');
});

con.on('error', function(){
  console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function(){
  console.log('Desconetado do MongoDB!');
});
