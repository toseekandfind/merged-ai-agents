const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongod;

// Setup before tests
beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
});

// Cleanup after tests
afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
}); 