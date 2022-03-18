import { PostsWhereInput } from './posts-where.input';
import { PostsOrderByInput } from './posts-order-by.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';
export declare class FindFirstPostsArgs {
    where?: PostsWhereInput;
    orderBy?: Array<PostsOrderByInput>;
    cursor?: PostsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PostsScalarFieldEnum>;
}
