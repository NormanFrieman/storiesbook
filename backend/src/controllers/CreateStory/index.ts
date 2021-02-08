import { Request, Response } from "express";

import { UploadImage } from '../../commands/uploadImage';

export class CreateStory{
    async handle(req: Request, res: Response){
        const uploadImage = new UploadImage();

        return await uploadImage.upload(req, res);
    };
}