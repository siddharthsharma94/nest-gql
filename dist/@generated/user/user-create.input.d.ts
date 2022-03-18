import { PostsCreateNestedManyWithoutCreatedByInput } from '../posts/posts-create-nested-many-without-created-by.input';
export declare class UserCreateInput {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    Posts?: PostsCreateNestedManyWithoutCreatedByInput;
}
