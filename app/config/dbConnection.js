var mysql = require('mysql');

//Wrapper da conexão com o DB
var connMySql = function () {
    
    console.log('Conexão com o DB estabelecida');
    return mysql.createConnection({
        host : 'mavmint',
        user : 'root',
        password : 'hadouken',
        database : 'portal_noticias'
    });
}
module.exports = function () {
    console.log('Módulo de conexão do DB carregado');
    return connMySql;
} 