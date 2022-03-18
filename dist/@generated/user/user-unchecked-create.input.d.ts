import { PostsUncheckedCreateNestedManyWithoutCreatedByInput } from '../posts/posts-unchecked-create-nested-many-without-created-by.input';
export declare class UserUncheckedCreateInput {
    id?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    Posts?: PostsUncheckedCreateNestedManyWithoutCreatedByInput;
}
