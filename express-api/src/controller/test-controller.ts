import { Controller, Get } from '@inversifyjs/http-core';
import { inject } from 'inversify';
import { Katana } from '../service/katana.ts';

@Controller('/test')
export class TestController {
  constructor(
    @inject(Katana)
    private katana: Katana
  ) {}

  @Get('/')
  public async test(): Promise<number> {
    return this.katana.damage
  }
}