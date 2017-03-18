var requireOption = require('../common').requireOption;

/*
* Get the client list and put the clients on res.tpl.clients
* */
module.exports = function (objectRepository) {

    var clientModel = requireOption(objectRepository, 'clientModel');

    return function (req, res, next) {
        return next();
    }

};