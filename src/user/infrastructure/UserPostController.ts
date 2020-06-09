import express from 'express';
import { UserCreator } from '../application/UserCreator';
import { MongoUserRepository } from './MongoUserRepository';
import { User } from '../domain/User';
const router = express.Router();

const repository = new UserCreator(new MongoUserRepository());

router.post('/', async (req, res) => {
  const { name, email, username } = req.body;
  try {
    const user: User = await repository.create(name, email, username);
    res.status(201).send({ error: null, message: user });
  } catch (error) {
    console.log(error);
    res.status(501).send({ error: error, message: null });
  }
});

module.exports = router;
