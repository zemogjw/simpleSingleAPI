import { User } from './User';

export interface AccountRepository {
  isActived(accountId: string): Promise<User | false>;
  deactivateAccount(user: User): Promise<User>;
  getAllAccounts(): Promise<User[]>;
  getUser(accountId: string): Promise<User>;
  createUser(name: string, email: string, username: string): Promise<User>;
  update(id: string, query: object): Promise<User>;
}
