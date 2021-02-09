import { listUsersDB } from '../../commands/database';

import { Controller } from '../../protocols';

import { ListUsers } from '../../controllers/ListUsers';

export const makeListUsers = (): Controller => {
    const controller = new ListUsers(listUsersDB);

    return controller;
}