import { User } from "../Entity/User";

export interface IUserRepository {
    save(user: User): Promise<User>
} 
