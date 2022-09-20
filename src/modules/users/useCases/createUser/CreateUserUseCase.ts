import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailAlereadyUsed = this.usersRepository.findByEmail(email);

    if (emailAlereadyUsed) {
      throw new Error("Email aleready used!");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
