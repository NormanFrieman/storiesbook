import bcrypt from 'bcrypt';

import { ResponseFunction } from '../../protocols';

export const encrypt = async (password: string): Promise<ResponseFunction> => {
    const hash: string = await bcrypt.hash(password, 10);
    
    if(!hash){
        const response: ResponseFunction = {
            sucess: false,
            body: 'the hash could not be created'
        };
    
        return response;
    }
    const response: ResponseFunction = {
        sucess: true,
        body: hash
    };

    return response;
}