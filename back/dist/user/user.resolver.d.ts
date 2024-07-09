import { User } from "./user.model";
export declare class UserResolver {
    private users;
    getUsers(): User[];
    getUser(id: number): User;
    createUser(username: string, passeword: string): User;
    updateUser(id: number, username?: string, passeword?: string): User;
    deleteUser(id: number): boolean;
}
