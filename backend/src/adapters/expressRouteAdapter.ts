import { Request, Response } from 'express';

import { Controller } from '../protocols';

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        return controller.handle(req, res);
    }
}