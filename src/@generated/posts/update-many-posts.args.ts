import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsUpdateManyMutationInput } from './posts-update-many-mutation.input';
import { PostsWhereInput } from './posts-where.input';

@ArgsType()
export class UpdateManyPostsArgs {

    @Field(() => PostsUpdateManyMutationInput, {nullable:false})
    data!: PostsUpdateManyMutationInput;

    @Field(() => PostsWhereInput, {nullable:true})
    where?: PostsWhereInput;
}
