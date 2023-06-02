import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity/flavor.entity";
import { CoffeeRefactor1685703999321 } from "src/migrations/1685703999321-CoffeeRefactor";
import { SchemaSync1685704392282 } from "src/migrations/1685704392282-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1685703999321, SchemaSync1685704392282],
});