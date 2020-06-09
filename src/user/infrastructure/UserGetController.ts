import express from 'express';
import { AccountLister } from '../application/AccountLister';
import { MongoUserRepository } from './MongoUserRepository';
const router = express.Router();

const accountRepository = new AccountLister(new MongoUserRepository());

router.get('/', async (req, res) => {
  try {
    const users = await accountRepository.listAccounts();
    res.status(200).send({ error: null, message: users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: null });
  }
});

router.get('/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await accountRepository.getUser(username);
    res.status(200).send({ error: null, message: user });
  } catch (error) {
    res.status(500).send({ error, message: null });
  }
});

module.exports = router;
