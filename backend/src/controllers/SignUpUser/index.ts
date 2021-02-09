import { Request, Response } from "express";

import { Controller } from '../../protocols/controller';

export class SignUpUser implements Controller{
    constructor(
        private readonly addUserDB: Function
    ){}
    async handle(req: Request, res: Response){
        await this.addUserDB();
        
        return res.send("Create User");
    }
}