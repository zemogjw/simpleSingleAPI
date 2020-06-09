require('dotenv').config();
import { AccountRepository } from '../domain/AccountRepository';
import { User } from '../domain/User';

const { MongoClient, ObjectId } = require('mongodb');

export class MongoUserRepository implements AccountRepository {
  client: any;
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((error: any) => {
        console.log(`error: ${error}`);
        if (error) reject(error);
        resolve(this.client.db('database01'));
      });
    });
  }
  async isActived(accountId: string): Promise<false | User> {
    const db: any = await this.connect();
    const result: false | User = await db
      .collection('users')
      .findOne({ _id: ObjectId(accountId), active: true });
    return result;
  }
  async deactivateAccount(user: User): Promise<User> {
    const db: any = await this.connect();
    const newUser: User = db
      .collection('users')
      .updateOne({ _id: ObjectId(user._id) }, { $set: { active: false } });
    return newUser;
  }
  async getAllAccounts(): Promise<User[]> {
    const db: any = await this.connect();
    return db.collection('users').find({ active: true }).toArray();
  }
  async createUser(name: string, email: string, username: string): Promise<User> {
    const db: any = await this.connect();
    return db
      .collection('users')
      .insertOne({ name, email, username, active: true, points: 0 });
  }

  async update(id: string, query: object): Promise<User> {
    const { name, email, username, points } = <any>query;
    const db: any = await this.connect();
    return db
      .collection('users')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, email, username, points } });
  }

  async getUser(username: string): Promise<User> {
    const db: any = await this.connect();
    return db.collection('users').findOne({ username: username });
  }
}
