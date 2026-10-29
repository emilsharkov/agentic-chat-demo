import { inject, injectable } from 'inversify';
import { Katana } from './katana.ts';

@injectable()
export class Ninja {
  constructor(
    @inject(Katana)
    public readonly katana: Katana,
  ) {}
}