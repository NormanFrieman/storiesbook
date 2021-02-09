import "reflect-metadata";
import {createConnection} from "typeorm";

import { server } from './server';

createConnection().then(async () => {
    server();
}).catch(error => console.log(error));
