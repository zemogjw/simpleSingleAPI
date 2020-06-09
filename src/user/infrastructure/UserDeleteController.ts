import express from 'express';
import { AccountDeletion } from '../application/AccountDeletion';
import { MongoUserRepository } from './MongoUserRepository';
const router = express.Router();

const deletor = new AccountDeletion(new MongoUserRepository());

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deletor.unsubscribeAccount(id);
    if (result) {
      res.status(202).send({ error: null, message: result });
    } else {
      res.status(400).send({ error: null, message: result });
    }
  } catch (error) {
    res.status(400).send({ error: null, message: error });
  }
});

module.exports = router;
