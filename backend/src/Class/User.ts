import Database from "@ioc:Adonis/Lucid/Database";
import { msgStatus } from "../Interfaces";

export class User{
    public name: string;
    
    public email: string;
    
    public password: string;

    construtor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async insert(): Promise<msgStatus>{
        let condition: boolean = false;
        let response: msgStatus = {
            msg: "Unregistered user",
            status: 401
        };

        await Database
            .insertQuery()
            .table("users")
            .insert({
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(() => {
                console.log("User successfully registered");

                response.msg = "User successfully registered";
                response.status = 200;
                
                condition = true;
            })
            .catch(() => {
                console.log("Unregistered user");
            });
        
        if(!condition)
            return response;
        
        return response;
    };

    async list(): Promise<object[]>{
        const users = Database.query().select("*").from("users");

        return users;
    };

    async delete(email: string): Promise<msgStatus>{
        let condition: boolean = false;
        let response: msgStatus = {
            msg: "User not deleted",
            status: 401
        };

        await Database
            .from("users")
            .where("email", email)
            .delete()
            .then(() => {
                console.log("User successfully deleted");

                response.msg = "User successfully deleted";
                response.status = 200;

                condition = true;
            })
            .catch(() => {
                console.log("User not deleted");
            });
        
        if(!condition)
            return response;
        
        return response;
    }
};