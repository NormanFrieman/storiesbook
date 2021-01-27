// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async list () {
        return [{ id: 1, username: 'NormanFrieman' }];
    };
};
