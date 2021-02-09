import { Controller } from '../../protocols';

import { SignUpUser } from '../../controllers/SignUpUser';

export const makeSignUpUser = (): Controller => {
    const controller = new SignUpUser();

    return controller;
}