import { deleteUser } from "../../commands/database";

import { Controller } from "../../protocols";

import { DeleteUsers } from "../../controllers/DeleteUsers";

export const makeDeleteUser = (): Controller => {
    const controller = new DeleteUsers(deleteUser);

    return controller;
}