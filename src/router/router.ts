import { Router } from 'express';

export class BaseRouter<T> {
  public router: Router;
  public controller: T;

  constructor() {
    this.router = Router();
  }
}