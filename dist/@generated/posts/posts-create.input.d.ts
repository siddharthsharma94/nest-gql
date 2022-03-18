import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
export declare class PostsCreateInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    content: string;
    createdBy: UserCreateNestedOneWithoutPostsInput;
}
