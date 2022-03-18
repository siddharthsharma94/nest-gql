import { CreateOnePostsArgs } from './../@generated/posts/create-one-posts.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { User } from '../@generated/user/user.model';
import { Posts } from '../@generated/posts/posts.model';
export declare class UserResolver {
    getUsers(): Promise<(import(".prisma/client").User & {
        Posts: import(".prisma/client").Posts[];
    })[]>;
    createOneUser({ data }: CreateOneUserArgs): Promise<User>;
    createPost({ data }: CreateOnePostsArgs): Promise<Posts>;
}
