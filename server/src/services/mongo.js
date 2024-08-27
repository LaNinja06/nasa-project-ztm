const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL)
    // all the following parameters are options in the MongoDB driver that mongoose uses to connect to the databases.
    // MongoDB driver is the official API that node uses to talk to mongo databases. 
    // if we want to use the latest features in mongoose and the underlying mongo driver, we want to make sure the following parameters are set.
    
    // The following are no longer supported by MongoDB:
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,

    // await loadPlanetsData();
}

async function mongoDisconnect() {
    // await mongoose.connection.close();
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}