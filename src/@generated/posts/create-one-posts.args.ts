import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsCreateInput } from './posts-create.input';

@ArgsType()
export class CreateOnePostsArgs {

    @Field(() => PostsCreateInput, {nullable:false})
    data!: PostsCreateInput;
}
