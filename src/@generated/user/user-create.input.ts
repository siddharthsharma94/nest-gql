import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateNestedManyWithoutCreatedByInput } from '../posts/posts-create-nested-many-without-created-by.input';

@InputType()
export class UserCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => PostsCreateNestedManyWithoutCreatedByInput, {nullable:true})
    Posts?: PostsCreateNestedManyWithoutCreatedByInput;
}
