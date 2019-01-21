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

    //editar
    application.get('/edit/:id', function(req, res){
        application.app.controllers.admin.editarNoticias(application, req, res);
        console.log('entrou na rota de editar!');
    });

    application.post('noticias/salvarEdicao', function(req, res){
        application.app.controllers.admin.editarNoticias(application, req, res);
    });
};