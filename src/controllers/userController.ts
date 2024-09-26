import { Request, Response } from "express";

export class UserController {
  getUsers(req: Request, res: Response): Response {
    return res.status(200).json({
      user: "Alejandro Martinez",
    })
  }
}