import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class Emberek{
  nev : string;
  nem : string;
  szul : Date;
  egyenleg : string;
  statusz : boolean;

  constructor Emberek(nev,nem : string,szul : Date,egyenleg : string,statusz : boolean){
      this.nev= nev;

  }
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
