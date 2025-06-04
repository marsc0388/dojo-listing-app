const upload = require("../upload")

const uploadFile = async (req, res) => {
    try {
        await upload(req, res);

        console.log(req.file);
        if(req.file == undefined) {
            return res.send(`You must select a file.`);
        }

        return res.send(`File has been uploaded.`)
    }
    catch (err) {
        console.log(err);
        return res.send(`Error when trying to upload image: ${err}`)
    }
};

module.exports = {
    uploadFile: uploadFile
}