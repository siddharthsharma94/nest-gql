import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsUpdateInput } from './posts-update.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';

@ArgsType()
export class UpdateOnePostsArgs {

    @Field(() => PostsUpdateInput, {nullable:false})
    data!: PostsUpdateInput;

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;
}
