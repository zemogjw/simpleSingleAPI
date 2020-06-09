import { AccountRepository } from '../domain/AccountRepository';
import { User } from '../domain/User';

export class AccountLister {
  repository: AccountRepository;

  constructor(repository: AccountRepository) {
    this.repository = repository;
  }

  async listAccounts(): Promise<User[]> {
    const users: User[] = await this.repository.getAllAccounts();
    return users;
  }

  async getUser(username: string): Promise<User> {
    const user: User = await this.repository.getUser(username);
    return user;
  }
}
