import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsCreateInput } from './posts-create.input';
import { PostsUpdateInput } from './posts-update.input';
export declare class UpsertOnePostsArgs {
    where: PostsWhereUniqueInput;
    create: PostsCreateInput;
    update: PostsUpdateInput;
}
