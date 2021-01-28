// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { msgStatus } from "../../../src/Interfaces";
import { User } from "../../../src/Class/User";

export default class UsersController {
    public async list () {
        const users = new User();

        return users.list();
    };
    
    public async insert ({ request, response }) {
        const user = new User();

        const req = request.requestBody;

        user.name = req.name;
        user.email = req.email;
        user.password = req.email;

        const result: msgStatus = await user.insert();
                
        return response.status(result.status).json({ msg: result.msg });
    };

    public async delete ({ request, response }) {
        const user = new User();

        const req = request.requestBody;
        const result: msgStatus = await user.delete(req.email);
                
        return response.status(result.status).json({ msg: result.msg });
    };
};
