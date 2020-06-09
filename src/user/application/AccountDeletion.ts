import { AccountRepository } from '../domain/AccountRepository';
import { User } from '../domain/User';

export class AccountDeletion {
  repository: AccountRepository;

  constructor(repository: AccountRepository) {
    this.repository = repository;
  }

  async unsubscribeAccount(accountId: string): Promise<string> {
    try {
      const response = await this.repository.isActived(accountId);
      if (response) {
        await this.repository.deactivateAccount(response);
        // console.log(user);
        return `La cuenta fue eliminada`;
      } else {
        console.log('La cuenta ya se encuentra desactivada');
        return `Ocurrio un error intente mas tarde`;
      }
    } catch (error) {
      return `${error}`;
    }
  }
}
