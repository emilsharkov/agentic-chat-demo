import { Controller, Get } from '@inversifyjs/http-core';

@Controller('/test')
export class MessagesController {
  @Get('/')
  public async sayHello(): Promise<void> {
    console.log("Hello There")
  }
}