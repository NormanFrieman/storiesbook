import { addUserDB } from '../../commands/database';

import { Controller } from '../../protocols';

import { SignUpUser } from '../../controllers/SignUpUser';

export const makeSignUpUser = (): Controller => {
    const controller = new SignUpUser(addUserDB);

    return controller;
}