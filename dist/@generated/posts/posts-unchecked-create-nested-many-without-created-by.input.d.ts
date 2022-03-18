import { PostsCreateWithoutCreatedByInput } from './posts-create-without-created-by.input';
import { PostsCreateOrConnectWithoutCreatedByInput } from './posts-create-or-connect-without-created-by.input';
import { PostsCreateManyCreatedByInputEnvelope } from './posts-create-many-created-by-input-envelope.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
export declare class PostsUncheckedCreateNestedManyWithoutCreatedByInput {
    create?: Array<PostsCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<PostsCreateOrConnectWithoutCreatedByInput>;
    createMany?: PostsCreateManyCreatedByInputEnvelope;
    connect?: Array<PostsWhereUniqueInput>;
}
