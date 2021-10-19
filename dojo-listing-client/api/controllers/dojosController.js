const Dojo = require("../models/Dojo");
const validator = require('express-validator');
const { getAllDojos, getDojo, createDojo } = require('./dojosControllerFuncs')

// Get all dojos
const list =  async function(req, res, next) {

    const data = await getAllDojos();

    if(data.err) {
        return res.status(500).json({
            message: 'Error getting dojos.'
        });
    }
    else return res.json(data.dojos);
}

// Get one dojo
const show = async function(req, res) {
    const id = req.params.id;
    const data = await getDojo(id);

    if(data.err) {
        return res.status(500).json({
            message: 'Error getting dojo!'
        });
    }
    if(!data.dojo) {
        return res.status(404).json({
            message: 'No such dojo!'
        })
    }
    else {
        return res.json(data.dojo);
    }
}

// Create a dojo
const create = async function(req, res) {

    const dojo = await createDojo({title: req.body.title,
        kanchou: req.body.kanchou})

    if(data.err) {
        return res.status(500).json({
            message: 'Error creating dojo!'
        });
    }
    else {
        return res.json({
            message: 'saved',
            _id: dojo._id
        });
    }
}

module.exports = {
    list,
    show,
    create,
}