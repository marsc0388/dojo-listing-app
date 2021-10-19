const Dojo = require("../models/Dojo");
const validator = require('express-validator');
const { getAllDojos, getDojo, createDojo } = require('./dojosControllerFuncs')

// Get all dojos
const list =  async function(req, res, next) {

    try {
        const dojos = await getAllDojos();
        return res.json(data.dojos);
    }
    catch(err) {
        return res.status(500).json({
            message: 'Error getting dojos.'
        });
    }
}

// Get one dojo
const show = async function(req, res) {
    const id = req.params.id;

    try {
        const dojo = await getDojo(id);
        return res.json(data.dojo);
    }
    catch(err) {
        return res.status(500).json({
            message: 'Error getting dojo!'
        });
    }
}

// Create a dojo
const create = async function(req, res) {

    const input = {
        title: req.body.title,
        kanchou: req.body.kanchou
    };

    try {
        const createdDojo = await createDojo(input);
        return res.json({
            message: 'saved',
            _id: createdDojo._id
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'Error creating dojo!'
        });
    }
}

module.exports = {
    list,
    show,
    create,
}