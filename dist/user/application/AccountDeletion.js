"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDeletion = void 0;
class AccountDeletion {
    constructor(repository) {
        this.repository = repository;
    }
    unsubscribeAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.isActived(accountId);
                if (response) {
                    yield this.repository.deactivateAccount(response);
                    // console.log(user);
                    return `La cuenta fue eliminada`;
                }
                else {
                    console.log('La cuenta ya se encuentra desactivada');
                    return `Ocurrio un error intente mas tarde`;
                }
            }
            catch (error) {
                return `${error}`;
            }
        });
    }
}
exports.AccountDeletion = AccountDeletion;
