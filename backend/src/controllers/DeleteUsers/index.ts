import { Request, Response } from 'express';

import { Controller, ResponseFunction } from '../../protocols';

export class DeleteUsers implements Controller{
    constructor(
        private readonly deleteUser: Function
    ){}

    async handle(req: Request, res: Response){
        if(!req.body)
            return res.status(400).json({ msg: 'no information was received' });
        if(!req.body.email)
            return res.status(400).json({ msg: 'no email was received' });
        
        const result: ResponseFunction = await this.deleteUser(req.body.email);
        
        if(!result.sucess){
            return res.status(404).json({ msg: result.body });
        };

        return res.status(200).json({ msg: 'deleted user' });
    }
}