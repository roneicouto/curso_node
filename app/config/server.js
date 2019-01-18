//1 .chamando o módulo do Express
var express = require('express');
var app = express();
var msg = require('../mod_teste');
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

//4. incluindo o middleware do body-parser
app.use(bodyParser.urlencoded({extended:true}));
//5. incluindo o ExpressValidator
app.use(expressValidator());
//9. mapeando arquivos estáticos da aplicação
app.use(express.static('./app/public'));

//2. chamando o EJS
app.set('view engine', 'ejs');                                                     //ejs para controle de VIEWS do projeto    
app.set('views','./app/views');

//3. implementando o consign
var consign = require('consign');
// instanciando o consign para gerenciar as rotas
consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .then('./app/controllers/')
    .into(app);


//var views = require('../app/views')

//inicializa e testa servidor
app.listen(3000,'localhost',function(){
    console.log(msg());
})


module.exports = app;