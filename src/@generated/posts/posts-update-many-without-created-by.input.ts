import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutCreatedByInput } from './posts-create-without-created-by.input';
import { PostsCreateOrConnectWithoutCreatedByInput } from './posts-create-or-connect-without-created-by.input';
import { PostsUpsertWithWhereUniqueWithoutCreatedByInput } from './posts-upsert-with-where-unique-without-created-by.input';
import { PostsCreateManyCreatedByInputEnvelope } from './posts-create-many-created-by-input-envelope.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateWithWhereUniqueWithoutCreatedByInput } from './posts-update-with-where-unique-without-created-by.input';
import { PostsUpdateManyWithWhereWithoutCreatedByInput } from './posts-update-many-with-where-without-created-by.input';
import { PostsScalarWhereInput } from './posts-scalar-where.input';

@InputType()
export class PostsUpdateManyWithoutCreatedByInput {

    @Field(() => [PostsCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<PostsCreateWithoutCreatedByInput>;

    @Field(() => [PostsCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<PostsCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [PostsUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    upsert?: Array<PostsUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => PostsCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: PostsCreateManyCreatedByInputEnvelope;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    connect?: Array<PostsWhereUniqueInput>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    set?: Array<PostsWhereUniqueInput>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    disconnect?: Array<PostsWhereUniqueInput>;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    delete?: Array<PostsWhereUniqueInput>;

    @Field(() => [PostsUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    update?: Array<PostsUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [PostsUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    updateMany?: Array<PostsUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [PostsScalarWhereInput], {nullable:true})
    deleteMany?: Array<PostsScalarWhereInput>;
}
