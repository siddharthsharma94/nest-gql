import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { PostsCreateInput } from './posts-create.input';
import { PostsUpdateInput } from './posts-update.input';

@ArgsType()
export class UpsertOnePostsArgs {

    @Field(() => PostsWhereUniqueInput, {nullable:false})
    where!: PostsWhereUniqueInput;

    @Field(() => PostsCreateInput, {nullable:false})
    create!: PostsCreateInput;

    @Field(() => PostsUpdateInput, {nullable:false})
    update!: PostsUpdateInput;
}
