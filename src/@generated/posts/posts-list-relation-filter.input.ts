import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';

@InputType()
export class PostsListRelationFilter {

    @Field(() => PostsWhereInput, {nullable:true})
    every?: PostsWhereInput;

    @Field(() => PostsWhereInput, {nullable:true})
    some?: PostsWhereInput;

    @Field(() => PostsWhereInput, {nullable:true})
    none?: PostsWhereInput;
}
