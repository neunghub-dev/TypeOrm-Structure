import { AppDataSource } from '../data-source';
import { user } from '../entitys/user.entity';
import { UserCreateDto } from '../dto/user/create.dto';


const UserService = {
    async getAll() {
        return await AppDataSource.getRepository(user).find();
    },
    async getById(id: number) {
        return await AppDataSource.getRepository(user).findOne({
            where: { id },
        });
    },
    async create(users: UserCreateDto) {
        return await AppDataSource.getRepository(user).save(users);
    },
    async update(id: number, users: UserCreateDto) {
        return await AppDataSource.getRepository(user).update(id, users);
    },
    async delete(id: number) {
        return await AppDataSource.getRepository(user).delete(id);
    },
};

export default UserService;