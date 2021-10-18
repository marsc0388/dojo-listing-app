const Dojo = require("../models/Dojo");
const validator = require('express-validator');

// Get all dojos
module.exports.list = function(req, res, next) {
    Dojo.find({}, function(err, dojos) {
        if(err) {
            return res.status(500).json({
                message: 'Error getting dojos.'
            });
        }
        return res.json(dojos);
    });
}

// Get one dojo
module.exports.show = function(req, res) {
    const id = req.params.id;
    Dojo.findOne({_id: id}, function(err, dojo) {
        if(err) {
            return res.status(500).json({
                message: 'Error getting record.'
            });
        }
        if(!dojo) {
            return res.status(404).json({
                message: 'No such record'
            });
        }
        return res.json(dojo);
    })
}