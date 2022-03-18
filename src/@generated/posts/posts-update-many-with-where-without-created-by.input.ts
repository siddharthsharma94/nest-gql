import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsScalarWhereInput } from './posts-scalar-where.input';
import { PostsUpdateManyMutationInput } from './posts-update-many-mutation.input';

@InputType()
export class PostsUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => PostsScalarWhereInput, {nullable:false})
    where!: PostsScalarWhereInput;

    @Field(() => PostsUpdateManyMutationInput, {nullable:false})
    data!: PostsUpdateManyMutationInput;
}
