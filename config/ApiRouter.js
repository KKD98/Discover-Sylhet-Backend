var indexRouter = require('../routes/index');
var place = require('../routes/places')
var user = require('../routes/users');
var admin= require("../routes/Admin")

module.exports = app => {

    app.use('/', indexRouter);
    app.use('/user',user);
    app.use('/places',place);
    app.use('/admin',admin);

}
