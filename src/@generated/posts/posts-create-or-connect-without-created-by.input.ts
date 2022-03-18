import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsCreateWithoutCreatedByInput } from './posts-create-without-created-by.input';

@InputType()
export class PostsCreateOrConnectWithoutCreatedByInput {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;

    @Field(() => PostsCreateWithoutCreatedByInput, {nullable:false})
    create!: PostsCreateWithoutCreatedByInput;
}
