import UserDTO from "../dto/user-dto";

export default interface CreateUserInputBoundary {
  create(userDTO: UserDTO): Promise<UserDTO>;
}
