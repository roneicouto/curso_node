module.exports = function (aplication) {
    aplication.get('/noticias', function(req, res){
        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.noticiasDAO(connection);
        noticiasModel.getNoticias(function(error, result) {
            res.render('noticias/noticias', {noticias : result});
        }); 
    });

    aplication.get('/noticia',function(req, res){
        var connection = aplication.config.dbConnection();
        var noticiasModel = new aplication.app.models.noticiasDAO(connection);
           
        noticiasModel.getNoticia(function (error, result) {
            res.render('noticias/noticia', {noticia : result});
        });
        });
    
}
        //some após refactoring dos models
        //connection.query('select * from noticias', function (error, result) {
         //   res.render('./noticias/noticias',{noticias : result})            
        //}) 
