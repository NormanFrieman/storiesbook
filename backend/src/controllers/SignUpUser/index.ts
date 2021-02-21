import { Request, Response } from "express";

import { Controller, ResponseFunction } from '../../protocols';

export class SignUpUser implements Controller{
    constructor(
        private readonly addUserDB: Function,
        private readonly encrypt: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.body)
            return res.status(400).json({ msg: 'no information was received' });
        if(!req.body.email)
            return res.status(400).json({ msg: 'no email was received' });
        if(!req.body.name)
            return res.status(400).json({ msg: 'no name was received' });
        if(!req.body.password)
            return res.status(400).json({ msg: 'no password was received' });

        const response: ResponseFunction = await this.addUserDB(this.encrypt, req.body.email, req.body.name, req.body.password);
        
        if(!response.sucess)
            return res.status(500).json({ msg: response.body });

        return res.status(200).json({ msg: 'created user' });
    }
}