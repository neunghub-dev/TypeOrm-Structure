import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql", // or "postgres" or "sqlite"
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "database",
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
