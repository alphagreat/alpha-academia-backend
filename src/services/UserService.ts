import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import { CustomError } from '../errors';
import Bio from '../models/bio';
import User from '../models/user';
import { userSchema } from '../utils/validations';
import { NewUserDTO } from '../types/newUserDTO';

export class UserService {
  static async index(): Promise<User[]> {
    const users = await User.findAll<User>({
      include: Bio,
      attributes: { exclude: ['password'] }
    });

    return users;
  }

  static async create(user: User): Promise<NewUserDTO> {
    await userSchema.validateAsync(user, { abortEarly: false });
    const userIsRegistered = await User.findOne({
      where: { email: user.email }
    });

    if (userIsRegistered) {
      throw new CustomError(
        `${user.email} is already registered`,
        StatusCodes.CONFLICT
      );
    }

    const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

    user.password = bcrypt.hashSync(
      user.password + BCRYPT_PASSWORD,
      parseInt(SALT_ROUNDS as string)
    );

    const createdUser = await User.create<User>(user);

    await Bio.create({ userId: createdUser.id });

    return { id: createdUser.id, token: 'soon' };
  }
}
