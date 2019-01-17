/* ANTES DO REFATORAMENTO POR CONTROLLERS
module.exports = function (app) {
    app.get('/',function(req, res){                                                 //get = ROTA do express
        res.render('./admin/index');                                                  //render = VIEW do EJS
    });
}
*/

//apos refatoramento dos controllers
module.exports = function (application) {
    application.get('/',function(req, res){
        application.app.controllers.home.index(application, req, res);
    });
}