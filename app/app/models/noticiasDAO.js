// criando a classe NOTICIAS
function noticiasDAO(connection){
    this._connection = connection;
}

    noticiasDAO.prototype.getNoticias = function(callback){
        this._connection.query('select * from noticias order by data_criacao DESC', callback);
    };

    noticiasDAO.prototype.mostrarNoticia = function (id_noticia,callback) {
        console.log('ID = ' + id_noticia.id_noticia);
        var qry = 'select * from noticias where id_noticia = '+ id_noticia.id_noticia;
        this._connection.query('select * from noticias where id_noticia = '+ id_noticia.id_noticia,callback);
        console.log('A query executada é: ' + qry);
        
    };

    noticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
        this._connection.query('insert into noticias set ? ', noticia, callback)
    }

    noticiasDAO.prototype.get5UltimasNoticias = function (callback) {
        this._connection.query('select * from noticias order by id_noticia DESC LIMIT 5;',callback);
    }

    noticiasDAO.prototype.editarNoticias = function(id_noticia, callback){
        console.log('id para edição: '+id_noticia.id_noticia);
        var qry = 'UPDATE noticias SET ? WHERE id_noticia = ' +id_noticia.id_noticia;
        this._connection.query(qry);
        console.log('a query de edicao foi executada');
    }

//Exportando
module.exports = function() {
    return noticiasDAO;
}