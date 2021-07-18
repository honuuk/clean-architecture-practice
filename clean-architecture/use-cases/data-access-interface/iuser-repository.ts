import IUser from "../../entities/IUser";

export default interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findOneById(id: string): Promise<IUser | null>;
}
