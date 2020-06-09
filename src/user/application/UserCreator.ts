import { AccountRepository } from '../domain/AccountRepository';
import { User } from '../domain/User';

export class UserCreator {
  repository: AccountRepository;
  constructor(repository: AccountRepository) {
    this.repository = repository;
  }

  async create(name: string, email: string, username: string): Promise<User> {
    const res: any = await this.repository.createUser(name, email, username);
    const user: User = res.ops;
    return user;
  }
}
