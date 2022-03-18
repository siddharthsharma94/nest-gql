import { PostsCreateWithoutCreatedByInput } from './posts-create-without-created-by.input';
import { PostsCreateOrConnectWithoutCreatedByInput } from './posts-create-or-connect-without-created-by.input';
import { PostsUpsertWithWhereUniqueWithoutCreatedByInput } from './posts-upsert-with-where-unique-without-created-by.input';
import { PostsCreateManyCreatedByInputEnvelope } from './posts-create-many-created-by-input-envelope.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateWithWhereUniqueWithoutCreatedByInput } from './posts-update-with-where-unique-without-created-by.input';
import { PostsUpdateManyWithWhereWithoutCreatedByInput } from './posts-update-many-with-where-without-created-by.input';
import { PostsScalarWhereInput } from './posts-scalar-where.input';
export declare class PostsUpdateManyWithoutCreatedByInput {
    create?: Array<PostsCreateWithoutCreatedByInput>;
    connectOrCreate?: Array<PostsCreateOrConnectWithoutCreatedByInput>;
    upsert?: Array<PostsUpsertWithWhereUniqueWithoutCreatedByInput>;
    createMany?: PostsCreateManyCreatedByInputEnvelope;
    connect?: Array<PostsWhereUniqueInput>;
    set?: Array<PostsWhereUniqueInput>;
    disconnect?: Array<PostsWhereUniqueInput>;
    delete?: Array<PostsWhereUniqueInput>;
    update?: Array<PostsUpdateWithWhereUniqueWithoutCreatedByInput>;
    updateMany?: Array<PostsUpdateManyWithWhereWithoutCreatedByInput>;
    deleteMany?: Array<PostsScalarWhereInput>;
}
