// criando a classe NOTICIAS
function noticiasDAO(connection){
    this._connection = connection;
}

    noticiasDAO.prototype.getNoticias = function(callback){
        this._connection.query('select * from noticias order by data_criacao DESC', callback);
    };

    noticiasDAO.prototype.mostrarNoticia = function (id_noticia,callback) {
        console.log('ID = ' + id_noticia.id_noticia);
        this._connection.query('select * from noticias where id_noticia = '+ id_noticia.id_noticia,callback);
        
    };

    noticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
        this._connection.query('insert into noticias set ? ', noticia, callback)
    }

    noticiasDAO.prototype.get5UltimasNoticias = function (callback) {
        this._connection.query('select * from noticias order by id_noticia DESC LIMIT 5;',callback);
    }

//Exportando
module.exports = function() {
    return noticiasDAO;
}