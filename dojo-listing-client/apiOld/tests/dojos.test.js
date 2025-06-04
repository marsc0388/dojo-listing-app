import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

const { MongoMemoryServer } = require('mongodb-memory-server');
const { getAllDojos, getDojo, createDojo } = require('../controllers/dojosControllerFuncs')

const db = require('./testdb');
const Dojo = require('../models/Dojo');
// const request = require('supertest');
// const server = require('../index'); 

const mongod = new MongoMemoryServer();

beforeAll(async () => {
    await mongod.start();
    await db.connect(mongod)})

afterEach(async () => await db.clearDatabase(mongod))

afterAll(async () => await db.closeDatabase(mongod))

describe('Dojo POST', () => {

    it("should create a dojo", async () => {
    const input = {
        title: "Mumeishi",
        kanchou:  "Emiko Yoshikawa"
    };

    const createdDojo = await createDojo(input);
    // console.log("test",createdDojo)

    const dojo = await Dojo.findById(createdDojo._id);

    expect(dojo.title).toEqual("Mumeishi");
    expect(dojo.kanchou).toEqual("Emiko Yoshikawa");
    })
})