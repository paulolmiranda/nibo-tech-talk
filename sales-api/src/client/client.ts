export class Client {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly due: number = 3000,
  ) {}
}
