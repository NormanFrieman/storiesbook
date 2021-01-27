// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class UsersController {
    public async list () {
        const users = Database.query().select("*").from("users");

        return users;
    };
    
    public async insert ({ response }) {
        let condition: boolean = false;

        await Database
            .insertQuery()
            .table("users")
            .insert({
                name: "NormanFrieman",
                email: "normanfrieman@email.com",
                password: "1234"
            })
            .then(() => {
                console.log("User successfully registered");
                condition = true;
            })
            .catch(() => {
                console.log("Unregistered user");
            });
        
        if(!condition)
            return response.status(401).json({ msg: "Unregistered user" });
        
        return response.status(200).json({ msg: "User successfully registered" });
    };

    public async delete ({ response }) {
        let condition: boolean = false;

        await Database
            .from("users")
            .where("email", "normanfrieman@email.com")
            .delete()
            .then(() => {
                console.log("User successfully deleted");
                condition = true;
            })
            .catch(() => {
                console.log("User not deleted");
            });
        
        if(!condition)
            return response.status(401).json({ msg: "User not deleted" });
        
        return response.status(200).json({ msg: "User successfully deleted" });
    };
};
