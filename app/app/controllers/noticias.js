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
    
    console.log(req.query);
    var id_noticia = req.query;
    
    noticiasModel.getNoticia(id_noticia,function (error, result) {
        res.render('noticias/noticia', {noticia : result});
    });
}