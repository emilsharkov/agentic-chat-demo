import { Container, inject, injectable } from 'inversify';

@injectable()
export class Katana {
  public readonly damage: number = 10;
}