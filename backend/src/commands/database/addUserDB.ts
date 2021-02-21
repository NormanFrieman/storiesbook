import { User } from '../../entity/User';

import { ResponseFunction } from '../../protocols';

export const addUserDB = async (encrypt: Function, email: string, name: string, password: string) => {
    const user = new User();

    const result: ResponseFunction = await encrypt(password);
    if(!result.sucess){
        const response: ResponseFunction = { sucess: false, body: result.body };
        return response;
    }

    user.email = email;
    user.name = name;
    user.password = result.body;

    await user.save();

    const response: ResponseFunction = { sucess: true };
    return response;
};