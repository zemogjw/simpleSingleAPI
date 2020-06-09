"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
class MongoUserRepository {
    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect((error) => {
                console.log(`error: ${error}`);
                if (error)
                    reject(error);
                resolve(this.client.db('database01'));
            });
        });
    }
    isActived(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            const result = yield db
                .collection('users')
                .findOne({ _id: ObjectId(accountId), active: true });
            return result;
        });
    }
    deactivateAccount(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            const newUser = db
                .collection('users')
                .updateOne({ _id: ObjectId(user._id) }, { $set: { active: false } });
            return newUser;
        });
    }
    getAllAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            return db.collection('users').find({ active: true }).toArray();
        });
    }
    createUser(name, email, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            return db
                .collection('users')
                .insertOne({ name, email, username, active: true, points: 0 });
        });
    }
    update(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, username, points } = query;
            const db = yield this.connect();
            return db
                .collection('users')
                .updateOne({ _id: ObjectId(id) }, { $set: { name, email, username, points } });
        });
    }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            return db.collection('users').findOne({ username: username });
        });
    }
}
exports.MongoUserRepository = MongoUserRepository;
