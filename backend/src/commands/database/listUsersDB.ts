import { User } from '../../entity/User';

export const listUsersDB = async () => {
    const users = await User.find();
    console.log(users);

    return users;
}