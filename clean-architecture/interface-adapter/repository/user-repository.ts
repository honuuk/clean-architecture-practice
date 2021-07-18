import IUser from "../../entities/IUser";
import User from "../../entities/User";
import IUserRepository from "../../use-cases/data-access-interface/iuser-repository";

export default class UserRepository implements IUserRepository {
  async create(user: IUser): Promise<IUser> {
    console.log("user가 db에 생성되었다고 가정");
    return new User(
      user.getId(),
      user.getName(),
      user.getEmail(),
      user.getPassword()
    );
  }

  async findOneById(id: string): Promise<IUser | null> {
    console.log("id를 가지는 user가 없다고 가정");
    return null;
  }
}
