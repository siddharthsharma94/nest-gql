import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { PostsOrderByInput } from './posts-order-by.input';
import { PostsWhereUniqueInput } from './posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';

@ArgsType()
export class FindFirstPostsArgs {

    @Field(() => PostsWhereInput, {nullable:true})
    where?: PostsWhereInput;

    @Field(() => [PostsOrderByInput], {nullable:true})
    orderBy?: Array<PostsOrderByInput>;

    @Field(() => PostsWhereUniqueInput, {nullable:true})
    cursor?: PostsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostsScalarFieldEnum>;
}
