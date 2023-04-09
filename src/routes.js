const express = require('express')

const routes = express.Router();

routes.get('/', function(req,res){
// REQ = REQUISIÇÃO PARA TRAZER ALGO DO FRONT PARA O BACK
// RES = PARA ENVIAR ALGO PARA O FRONT
// Primeiro parametro é o nome da rota 
// Segundo parametro vai excutar a função de requisição e resposta
// Get para LISTAR
    res.json({messenge: "Bem-Vindo ao Back End MongoDB"});
})


// Post para INCLUIR
// Put para EDITAR
// Delete para DELETAR 
module.exports = routes;
// Para exportar as rotas que estão dentro.