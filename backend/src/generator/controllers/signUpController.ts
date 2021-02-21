import { addUserDB } from '../../commands/database';

import { encrypt } from '../../commands/tools/encrypt';

import { Controller } from '../../protocols';

import { SignUpUser } from '../../controllers/SignUpUser';

export const makeSignUpUser = (): Controller => {
    const controller = new SignUpUser(addUserDB, encrypt);

    return controller;
}