//refatorei a rota, tirando os controllers
module.exports = function (application) {
    application.get('/noticias', function(req, res){
        application.app.controllers.noticias.listarNoticias(application, req, res);
    });

    application.get('/noticia',function(req, res){
        application.app.controllers.noticias.mostrarNoticia(application, req, res);
        });
    
}
        //some após refactoring dos models
        //connection.query('select * from noticias', function (error, result) {
         //   res.render('./noticias/noticias',{noticias : result})            
        //}) 
