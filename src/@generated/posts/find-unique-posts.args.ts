import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@ArgsType()
export class FindUniquePostsArgs {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;
}
