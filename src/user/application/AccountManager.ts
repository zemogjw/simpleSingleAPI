import { AccountRepository } from '../domain/AccountRepository';

export class AccountManager {
  repository: AccountRepository;

  constructor(repository: AccountRepository) {
    this.repository = repository;
  }

  // Este metodo debe ser parte de la interfaz AccountRepository
  // unsubscribeAccount(accountId: number): string {
  //   if (this.repository.isActived(accountId)) {
  //     if (this.repository.deactivateAccount(accountId)) {
  //       return 'Has eliminado tu cuenta, esperamos que regreses pronto!';
  //     } else {
  //       return 'Esta cuenta ya se encuentra eliminada';
  //     }
  //   } else {
  //     return 'Cuenta ';
  //   }
  // }
}
