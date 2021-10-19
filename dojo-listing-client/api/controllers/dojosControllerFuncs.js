const Dojo = require("../models/Dojo");

async function getAllDojos() {
    try {
        return await Dojo.find({});
    }
    catch(err) {
        return err
    }
}

async function getDojo(id) {
    try {
        return await Dojo.findOne({_id, id});
    }
    catch(err) {
        return err
    }
}

async function createDojo(dojoObject) {
    try {
        const createdDojo = new Dojo(dojoObject)
        return await createdDojo.save();
    }
    catch(err) {
        return err;
    }
}
 


module.exports = {
    getAllDojos,
    getDojo,
    createDojo,
}