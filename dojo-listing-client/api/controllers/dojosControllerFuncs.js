const Dojo = require("../models/Dojo");

async function getAllDojos() {
    try {
        return await Dojo.find({});
    }
    catch(err) {
        throw err
    }
}

async function getDojo(id) {
    try {
        return await Dojo.findOne({_id, id});
    }
    catch(err) {
        throw err
    }
}

async function createDojo(dojoObject) {
    try {
        const createdDojo = new Dojo(dojoObject)
        return await createdDojo.save();
    }
    catch(err) {
        throw err;
    }
}
 


module.exports = {
    getAllDojos,
    getDojo,
    createDojo,
}