module.exports.listarNoticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);
    noticiasModel.getNoticias(function(error, result) {
        res.render('noticias/noticias', {noticias : result});
    });     
}

module.exports.mostrarNoticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);
       
    noticiasModel.getNoticia(function (error, result) {
        res.render('noticias/noticia', {noticia : result});
    });
}