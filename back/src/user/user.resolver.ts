import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.model";

@Resolver(of => User)
export class UserResolver {
  private users: User[] = [];

  @Query(returns => [User])
  getUsers(): User[] {
    return this.users;
  }

  @Query(returns => User)
  getUser(@Args('id') id: number): User {
    return this.users.find(user => user.id === id);
  }

  @Mutation(returns => User)
  createUser(
    @Args('username') username: string,
    @Args('password') passeword: string
  ): User {
    const newUser: User = {
      id: this.users.length + 1,
      username,
      passeword,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Mutation(returns => User)
  loginUser(
    @Args('username') username: string,
    @Args('password') password: string
  ): User {
    const user = this.users.find(user => user.username === username && user.passeword === password);
    if (!user) throw new Error('Invalid credentials');
    return user;
  }

  @Mutation(returns => User)
  updateUser(
    @Args('id') id: number,
    @Args('username', { nullable: true }) username?: string,
    @Args('password', { nullable: true }) passeword?: string
  ): User {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error('User not found');
    
    if (username) user.username = username;
    if (passeword) user.passeword = passeword;

    return user;
  }

  @Mutation(returns => Boolean)
  deleteUser(@Args('id') id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');

    this.users.splice(userIndex, 1);
    return true;
  }
}
