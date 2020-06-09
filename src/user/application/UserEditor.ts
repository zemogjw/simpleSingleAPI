import { AccountRepository } from '../domain/AccountRepository';
import { User } from '../domain/User';

export class UserEditor {
  repository: AccountRepository;
  constructor(repository: AccountRepository) {
    this.repository = repository;
  }
  async updateUser(accountId: string, data: object): Promise<User> {
    // const { name, email, username }: object = data;
    const user: User = await this.repository.update(accountId, data);
    return user;
  }
}
