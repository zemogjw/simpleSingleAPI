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
const AccountManager_1 = require("../application/AccountManager");
const MockAccountRepository_1 = require("./MockAccountRepository");
const router = express_1.default.Router();
const accountManager = new AccountManager_1.AccountManager(new MockAccountRepository_1.MockAccountRepository());
router.get('/', (req, res) => {
    res.status(200).send('GET users');
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`GET one user ${id}`);
});
router.post('/', (req, res) => {
    res.status(201).send('POST users');
});
router.put('/', (req, res) => {
    res.status(200).send('PUT users');
});
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield accountManager.unsubscribeAccount(Number.parseInt(id));
        if (result) {
            res.status(202).send({ error: null, message: result });
        }
        else {
            res.status(400).send({ error: null, message: result });
        }
    }
    catch (error) {
        res.status(400).send({ error: null, message: error });
    }
}));
module.exports = router;
