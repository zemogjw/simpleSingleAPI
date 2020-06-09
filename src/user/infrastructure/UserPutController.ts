import express from 'express';
import { UserEditor } from '../application/UserEditor';
import { MongoUserRepository } from './MongoUserRepository';
const router = express.Router();

const userEditor = new UserEditor(new MongoUserRepository());

router.put('/:accountId', async (req, res) => {
  const { accountId } = req.params;
  const { name, username, points } = req.body;
  try {
    const data = await userEditor.updateUser(accountId, { name, username, points });
    res.status(200).send({ error: null, message: 'Usuario actualizado' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: null });
  }
});

module.exports = router;
