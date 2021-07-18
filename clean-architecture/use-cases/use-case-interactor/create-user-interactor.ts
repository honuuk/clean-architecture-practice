import IUser from "../../entities/IUser";
import User from "../../entities/User";
import IUserRepository from "../data-access-interface/iuser-repository";
import UserDTO from "../dto/user-dto";
import CreateUserInputBoundary from "../input-boundary/create-user-input-boundary";

export default class CreateUserInteractor implements CreateUserInputBoundary {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async create(userDTO: UserDTO): Promise<UserDTO> {
    const user: IUser = new User(
      userDTO.getId(),
      userDTO.getName(),
      userDTO.getEmail(),
      userDTO.getPassword()
    );

    const foundUserById = await this.userRepository.findOneById(user.getId());
    if (foundUserById) throw new Error("duplicated id");

    if (!user.passwordIsValid()) throw new Error("invalid password");
    if (!user.emailIsValid()) throw new Error("invalid email");

    const createdUser = await this.userRepository.create(user);
    const createUserDTO = new UserDTO(
      createdUser.getId(),
      createdUser.getName(),
      createdUser.getEmail(),
      createdUser.getPassword()
    );
    return createUserDTO;
  }
}
