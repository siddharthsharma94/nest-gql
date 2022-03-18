import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostsUncheckedCreateNestedManyWithoutCreatedByInput } from '../posts/posts-unchecked-create-nested-many-without-created-by.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => PostsUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    Posts?: PostsUncheckedCreateNestedManyWithoutCreatedByInput;
}
