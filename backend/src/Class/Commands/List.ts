import Database from "@ioc:Adonis/Lucid/Database";

async function List(database: string): Promise<object[]>{
    const infos = Database.query().select("*").from(database);

    return infos;
};

export default List;