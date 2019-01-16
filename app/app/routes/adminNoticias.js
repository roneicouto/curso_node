module.exports = function (aplication) {
    //rotas de administração das noticias

    //inclusão
    aplication.get('/addnoticias',function(req, res){
        res.render('./noticias/form_add_noticias', {validacao : {}, noticia:{}});
    });

    //salvar
    aplication.post('/noticias/salvar',function(req, res){
        var noticia = req.body;
        //4 validacao dos dados
        req.assert('titulo','o campo Título não pode ficar em branco').notEmpty();
        req.assert('resumo','o campo Resumo não pode ficar em branco').notEmpty();
        req.assert('resumo','o campo Resumo deve estar entre 10 a 100 caracteres').len(10,100);
        req.assert('autor','o campo Autor não pode ficar em branco').notEmpty();
        req.assert('data_noticia','o campo DATA não pode ficar em branco').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            console.log(erros);
            res.render('./noticias/form_add_noticias', {validacao : erros, noticia : noticia});
            return;
        }

        //1recupera a conexão
        var connection = aplication.config.dbConnection();
        //2recupera o MODEL
        var noticiasModel = new aplication.app.models.noticiasDAO(connection);
        //3salvar noticias, conecta e chama o callback
        noticiasModel.salvarNoticia(noticia, function(error, result) {
            //tratar o F5 (refresh), evitar duplicidades, redirecionar para pagina correta
            res.redirect('/noticias');
        }); 
    });
};