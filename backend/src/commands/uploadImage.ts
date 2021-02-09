import { Request, Response } from 'express';
import multer from 'multer';

export const uploadImage = async (req: Request, res: Response) => {
    const parser = multer({ dest: 'public/uploads' });

    parser.single('avatar')(req, res, err => {
        if(err)
            res.status(500).json({ error: 1, payload: err });
        else{
            const img = {
                id: `${req.file.filename}`,
                url: `/uploads/${req.file.filename}`
            };                

            res.status(200).json({ error: 0, payload: { id: img.id, url: img.url } });
        }
    });
};