import { Product } from "./product";

export class Client {
  public products?: Product[];

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly due: number = 3000,
  ) {}
}
