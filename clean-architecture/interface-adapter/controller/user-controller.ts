import { Request, Response } from "express";
import UserDTO from "../../use-cases/dto/user-dto";

import CreateUserInputBoundary from "../../use-cases/input-boundary/create-user-input-boundary";

export default class UserController {
  private createUserInteractor: CreateUserInputBoundary;

  constructor(createUserInteractor: CreateUserInputBoundary) {
    this.createUserInteractor = createUserInteractor;
  }

  async createUser(req: Request, res: Response) {
    const { id, name, email, password } = req.body;

    if (!id || !name || !email || !password)
      throw new Error("invalid request body");

    const userDTO = new UserDTO(id, name, email, password);
    const createdUser = await this.createUserInteractor.create(userDTO);
    return res.json(createdUser);
  }
}
