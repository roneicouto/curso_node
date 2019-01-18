module.exports.index = function (application, req, res) {

    //incluindo a conexão com o db para trazer as ultimas noticias à home
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);    //cuidado com o caseSensitive

    noticiasModel.get5UltimasNoticias(
        function(error, result){
            console.log(result);
            res.render('./admin/index', {noticias : result});
        });
        
    

    
}