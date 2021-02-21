import { Request, Response } from 'express';
import multer from 'multer';

export class UploadImage{
    constructor(
        private readonly uploadDatabase: any
    ){}

    handle(req: Request, res: Response){
        const parser = multer({ dest: 'public/uploads' });

        parser.single('avatar')(req, res, err => {
            if(err)
                return res.status(500).json({ error: 1, payload: err });
            else{
                const img = {
                    id: `${req.file.filename}`,
                    url: `/uploads/${req.file.filename}`
                };                
                
                this.uploadDatabase(img);

                return res.status(200).json({ error: 0, payload: { id: img.id, url: img.url } });
            }
        });
    }
}
/*
export const uploadImage = async (req: Request, res: Response) => {
    const parser = multer({ dest: 'public/uploads' });

    parser.single('avatar')(req, res, err => {
        if(err)
            return res.status(500).json({ error: 1, payload: err });
        else{
            const img = {
                id: `${req.file.filename}`,
                url: `/uploads/${req.file.filename}`
            };                

            return res.status(200).json({ error: 0, payload: { id: img.id, url: img.url } });
        }
    });
};*/