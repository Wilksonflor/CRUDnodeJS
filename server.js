const express = require('express');
// Express => Servidor para pegar as rotas e definir a aplicação
const cookieParser = require('cookie-parser');
// CookieParser => Para a troca de dados
const cors = require('cors')
// Cors => É para compartilhar dados entre os dominios para não ter conflitos
const path = require('path')
// path => Vem direto do Node. É usado para usar as pastas
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()
// Para 'chamar o express' colocando ele em uma variável; 


// mongoose.connect('mongodb://localhost:27017/cursoMongoDB', {
//     useUnifieldTopoloy: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
// }
// // Iniciando a conexão com o banco de dados



app.use(cors())
// Sempre que for biblioteca chama como fosse uma função.
app.use(cookieParser())
app.use(express.json())
// Para pegar os dados e enviar os dados vai ser um JSON
app.use(routes);
// Não é uma biblioteca, então não precisa ser como função()



app.listen(3003, function(){
    console.log('Servidor Iniciado...')
})
// Primeiro parametro é a porta
// Segundo parametro é a função que vai executar na porta