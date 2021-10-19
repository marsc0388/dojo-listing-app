const mongoose = require('mongoose');
// Connect to db
module.exports.connect = async (mongod) => {
    const uri = mongod.getUri();
    const mongoose0pts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    await mongoose.connect(uri, mongoose0pts);
}

// Disconnect and close connection
module.exports.closeDatabase = async (mongod) => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

// clear the db, remove all data
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for(const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}