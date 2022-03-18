import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@ArgsType()
export class DeleteOnePostsArgs {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;
}
