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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserCreator_1 = require("../application/UserCreator");
const MongoUserRepository_1 = require("./MongoUserRepository");
const router = express_1.default.Router();
const repository = new UserCreator_1.UserCreator(new MongoUserRepository_1.MongoUserRepository());
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, username } = req.body;
    try {
        const user = yield repository.create(name, email, username);
        res.status(201).send({ error: null, message: user });
    }
    catch (error) {
        console.log(error);
        res.status(501).send({ error: error, message: null });
    }
}));
module.exports = router;
