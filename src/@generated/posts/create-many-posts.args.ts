import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsCreateManyInput } from './posts-create-many.input';

@ArgsType()
export class CreateManyPostsArgs {

    @Field(() => [PostsCreateManyInput], {nullable:false})
    data!: Array<PostsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
