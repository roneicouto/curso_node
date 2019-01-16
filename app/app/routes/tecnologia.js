module.exports = function (app) {
    app.get('/tecnologia',function(req, res){
        res.render('./secao/tecnologia');
    });
};
//var tec = require('../views/secao/tecnologia')