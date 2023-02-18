import Bio from '../models/bio';
import User from '../models/user';

export class UserService {
  static async index(): Promise<User[]> {
    const users = await User.findAll<User>({
      include: Bio,
      attributes: { exclude: ['password'] }
    });

    return users;
  }
  static async create(user: User): Promise<User> {

    //TODO: VALIDATE 

    const createdUser = await User.create<User>(user);
    await Bio.create({ userId: createdUser.id });

    return createdUser;
  }
}
