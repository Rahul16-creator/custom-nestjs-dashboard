import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //HTTP GET REQUEST
  @Get()
  //function call to get the data
  getData() {
    return this.appService.fetchData()
  }
}
