import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule.register({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    port: 5432,
    password: 'pass123'
  }), CoffeesModule],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule { }
