import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsUpdateWithoutCreatedByInput } from './posts-update-without-created-by.input';

@InputType()
export class PostsUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;

    @Field(() => PostsUpdateWithoutCreatedByInput, {nullable:false})
    data!: PostsUpdateWithoutCreatedByInput;
}
