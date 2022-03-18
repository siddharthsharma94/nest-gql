import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';

@ArgsType()
export class DeleteManyPostsArgs {

    @Field(() => PostsWhereInput, {nullable:true})
    where?: PostsWhereInput;
}
