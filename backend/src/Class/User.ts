import { msgStatus } from "../Interfaces";

import Insert from "./Commands/Insert";
import List from "./Commands/List";
import Delete from "./Commands/Delete";

export class User{
    public name: string;
    
    public email: string;
    
    public password: string;

    construtor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    };

    public async insert(): Promise<msgStatus>{
        const user: object = {
            name: this.name,
            email: this.email,
            password: this.password
        };

        const response: msgStatus = await Insert("users", user);
        
        return response;
    };

    public async list(): Promise<object[]>{
        const users: object[] = await List("users");

        return users;
    };

    public async delete(email: string): Promise<msgStatus>{
        const response: msgStatus = await Delete("users", { email: email });
        
        return response;
    }
};