const express = require('express');
const dotEnv = require('dotenv');
const UserGetController = require('./user/infrastructure/UserGetController');
const UserPostController = require('./user/infrastructure/UserPostController');
const UserDeleteController = require('./user/infrastructure/UserDeleteController');
const UserPutController = require('./user/infrastructure/UserPutController');
const app = express();

dotEnv.config();
app.use(express.json());

app.use('/users', UserGetController);
app.use('/users', UserPostController);
app.use('/users', UserDeleteController);
app.use('/users', UserPutController);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
