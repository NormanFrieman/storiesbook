import { Request, Response } from "express";

import { Controller } from '../../protocols/controller';

export class SignUpUser implements Controller{
    handle(req: Request, res: Response){
        return res.send("Create User");
    }
}