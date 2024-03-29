var requireOption = require('../common').requireOption;

/**
 * Fetches the car
 * if doesnt exist -> go back
 * if does exist -> put on res.tpl.car
 * @param objectRepository
 * @returns {Function}
 */
module.exports = function (objectRepository) {

    var carModel = requireOption(objectRepository, 'carModel');

    return function (req, res, next) {

        carModel.findOne({ _id: req.params.id}, function (err, result) {
            if(err){
                return next(new Error('Error getting cars'));
            }

            res.tpl.car = result;
            return next();
        });

    }

};