//refatorando as rotas, somente pra rotas
module.exports = function (application) {
    //rotas de administração das noticias

    //inclusão    
    application.get('/addnoticias',function(req, res){
        application.app.controllers.admin.addNoticia(application, req, res);
    });

    //salvar
    application.post('/noticias/salvar',function(req, res){
        application.app.controllers.admin.salvarNoticias(application, req, res);
    });
};