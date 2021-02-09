import { User } from '../../entity/User';

export const addUserDB = async () => {
    const user = new User();

    user.email = 'asd@mail.com';
    user.name = 'NormanFrieman';
    user.password = 'asdakajsdn';

    await user.save();
};