import { CreateOnePostsArgs } from './../@generated/posts/create-one-posts.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../@generated/user/user.model';
import { Posts } from '../@generated/posts/posts.model';
import db from '../db';

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async getUsers() {
    // const users;
    const users = await db.user.findMany({ include: { Posts: true } });
    return users;
  }

  @Mutation(() => User)
  async createOneUser(@Args() { data }: CreateOneUserArgs): Promise<User> {
    const user = await db.user.create({ data, include: { Posts: true } });
    return user;
  }

  @Mutation(() => Posts)
  async createPost(@Args() { data }: CreateOnePostsArgs): Promise<Posts> {
    const posts = await db.posts.create({ data });
    return posts;
  }
}
