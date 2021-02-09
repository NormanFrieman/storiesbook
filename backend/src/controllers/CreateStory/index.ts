import { Request, Response } from "express";

import { Controller } from '../../protocols/controller';

export class CreateStory implements Controller{
    constructor(
        private readonly uploadImage: Function
    ){}

    async handle(req: Request, res: Response){
        return await this.uploadImage(req, res);
    };
}