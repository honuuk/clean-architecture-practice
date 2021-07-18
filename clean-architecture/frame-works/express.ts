import express from "express";

import UserController from "../interface-adapter/controller/user-controller";
import UserRepository from "../interface-adapter/repository/user-repository";
import CreateUserInteractor from "../use-cases/use-case-interactor/create-user-interactor";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userController = new UserController(
  new CreateUserInteractor(new UserRepository())
);

app.post("/users", userController.createUser.bind(userController));

export default app;
