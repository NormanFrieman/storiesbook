import { Request, Response } from 'express';

import { Controller } from'../../protocols';

export class ListUsers implements Controller{
    constructor(
        private readonly listUsersDB: Function
    ){}
    async handle(req: Request, res: Response){
        return res.status(200).json({ users: await this.listUsersDB() });
    }
}