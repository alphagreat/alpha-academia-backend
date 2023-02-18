import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../errors';
import Bio from '../models/bio';
import User from '../models/user';
import { userSchema } from '../utils/validations';

export class UserService {
  static async index(): Promise<User[]> {
    const users = await User.findAll<User>({
      include: Bio,
      attributes: { exclude: ['password'] }
    });

    return users;
  }

  static async create(user: User): Promise<User> {
    await userSchema.validateAsync(user, {abortEarly: false});
    const userIsRegistered = await User.findOne({ where: { email: user.email } });

    if (userIsRegistered) {
      throw new CustomError(
        `${user.email} is already registered`,
        StatusCodes.CONFLICT
      );
    }

    const createdUser = await User.create<User>(user);
    await Bio.create({ userId: createdUser.id });

    return createdUser;
  }
}
