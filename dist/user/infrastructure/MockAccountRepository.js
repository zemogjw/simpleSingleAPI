"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAccountRepository = void 0;
class MockAccountRepository {
    constructor() {
        this.mockAccountList = [
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
    }
    isActived(accountId) {
        const user = this.mockAccountList.find(user => user._id === accountId && user.active === true);
        if (user) {
            console.log('el usuario esta activo');
            return Promise.resolve(user);
        }
        console.log('usuario desconocido');
        return Promise.resolve(false);
    }
    deactivateAccount(user) {
        user.active = false;
        return Promise.resolve(user);
    }
    getAllAccounts() {
        return Promise.resolve(this.mockAccountList);
    }
}
exports.MockAccountRepository = MockAccountRepository;
