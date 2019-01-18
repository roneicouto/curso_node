// criando a classe NOTICIAS
function noticiasDAO(connection){
    this._connection = connection;
}

noticiasDAO.prototype.getNoticias = function(callback){
        this._connection.query('select * from noticias', callback);
    };

    noticiasDAO.prototype.getNoticia = function (callback) {
        this._connection.query('select * from noticias where id_noticia = 2',callback);
        
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