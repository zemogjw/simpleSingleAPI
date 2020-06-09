import { User } from '../domain/User';
import { AccountRepository } from '../domain/AccountRepository';

export class MockAccountRepository {
  mockAccountList: User[] = [
    {
      _id: '1',
      name: 'David Ponce',
      email: 'buap.david@gmail.com',
      active: true,
      points: 2530,
    },
    {
      _id: '2',
      name: 'Diana Flores',
      email: 'dianaflo@gmail.com',
      active: true,
      points: 2103,
    },
    {
      _id: '3',
      name: 'Fernanda Castillo',
      email: 'fercast@gmail.com',
      active: true,
      points: 512,
    },
    {
      _id: '4',
      name: 'Rogelio Campos',
      email: 'rogcamp@gmail.com',
      active: true,
      points: 793,
    },
  ];

  isActived(accountId: string): Promise<User | false> {
    const user = this.mockAccountList.find(
      user => user._id === accountId && user.active === true
    );
    if (user) {
      console.log('el usuario esta activo');
      return Promise.resolve(user);
    }
    console.log('usuario desconocido');
    return Promise.resolve(false);
  }

  deactivateAccount(user: User): Promise<User> {
    user.active = false;
    return Promise.resolve(user);
  }

  getAllAccounts(): Promise<User[]> {
    return Promise.resolve(this.mockAccountList);
  }
}
