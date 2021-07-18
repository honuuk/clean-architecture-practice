export default interface IUser {
  getId(): string;
  getName(): string;
  getPassword(): string;
  getEmail(): string;

  passwordIsValid(): boolean;
  emailIsValid(): boolean;
}
