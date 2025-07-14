const util = require("util");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const db = require('./db')

var storage = new GridFsStorage({
    db: db,
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "image/gif"];

        if(match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-dojo-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-dojo-${file.originalname}`
        };
    }
});

var uploadFile = multer({storage: storage}).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware