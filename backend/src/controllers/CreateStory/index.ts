import { Request, Response } from "express";

import { Controller } from '../../protocols/controller';

export class CreateStory implements Controller{
    constructor(
        private readonly uploadImage: any
    ){}

    async handle(req: Request, res: Response): Promise<any>{
        const response = await this.uploadImage(req, res);
        
        return response;
    };
}