import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateWithoutCreatedByInput } from './posts-create-without-created-by.input';
import { PostsCreateOrConnectWithoutCreatedByInput } from './posts-create-or-connect-without-created-by.input';
import { PostsCreateManyCreatedByInputEnvelope } from './posts-create-many-created-by-input-envelope.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@InputType()
export class PostsUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [PostsCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<PostsCreateWithoutCreatedByInput>;

    @Field(() => [PostsCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<PostsCreateOrConnectWithoutCreatedByInput>;

    @Field(() => PostsCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: PostsCreateManyCreatedByInputEnvelope;

    @Field(() => [PostsWhereUniqueInput], {nullable:true})
    connect?: Array<PostsWhereUniqueInput>;
}
