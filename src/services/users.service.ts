import { User } from "../dtos/User";

export function createUser(user: User) {
  user.id = 100;
  user.password = "*******";
  user.passwordConfirmation = "*******";
  return user;
}