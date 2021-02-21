import { User } from '../../entity/User';

import { ResponseFunction } from '../../protocols';

export const deleteUser = async ( email: string ) => {
    const user = await User.findOne({ email: email });
    
    if(!user){
        const response: ResponseFunction = {
            sucess: false,
            body: 'undefined user'
        };

        return response;
    }

    await user.remove();

    const response: ResponseFunction = {
        sucess: true
    };

    return response;
}