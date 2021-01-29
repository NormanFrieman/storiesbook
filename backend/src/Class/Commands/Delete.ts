import { msgStatus } from "../../Interfaces";
import Database from "@ioc:Adonis/Lucid/Database";

async function Delete(database: string, info: object): Promise<msgStatus>{
    let condition: boolean = false;
    let response: msgStatus = {
        msg: "error when deleting",
        status: 401
    };

    await Database
        .from(database)
        .where(info)
        .delete()
        .then(() => {
            console.log("delete completed");

            response.msg = "delete completed";
            response.status = 200;

            condition = true;
        })
        .catch(() => {
            console.log("error when deleting");
        });
    
    if(!condition)
        return response;
    
    return response;
};

export default Delete;