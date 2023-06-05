import { Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule],
    controllers: [CoffeesController],
    providers: [CoffeesService, { provide: COFFEE_BRANDS, useFactory: () => ['buddy brew', 'nescafe'], scope: Scope.TRANSIENT }],
    exports: [CoffeesService],
})
export class CoffeesModule { }
