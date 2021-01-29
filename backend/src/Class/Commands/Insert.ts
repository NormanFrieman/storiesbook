import { msgStatus } from "../../Interfaces";
import Database from "@ioc:Adonis/Lucid/Database";

async function Insert(database: string, info: object): Promise<msgStatus>{
    let condition: boolean = false;
    let response: msgStatus = {
        msg: "error when registering",
        status: 401
    };

    await Database
        .insertQuery()
        .table(database)
        .insert(info)
        .then(() => {
            console.log("successful registration");

            response.msg = "successful registration";
            response.status = 200;
            
            condition = true;
        })
        .catch(() => {
            console.log("error when registering");
        });
    
    if(!condition)
        return response;
    
    return response;
};

export default Insert;