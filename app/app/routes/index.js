module.exports = function (app) {
    app.get('/',function(req, res){                                                 //get = ROTA do express
        res.render('./admin/index');                                                  //render = VIEW do EJS
    });
}