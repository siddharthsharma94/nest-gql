import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsAvgAggregate } from './posts-avg-aggregate.output';
import { PostsSumAggregate } from './posts-sum-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';

@ObjectType()
export class PostsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => PostsCountAggregate, {nullable:true})
    _count?: PostsCountAggregate;

    @Field(() => PostsAvgAggregate, {nullable:true})
    _avg?: PostsAvgAggregate;

    @Field(() => PostsSumAggregate, {nullable:true})
    _sum?: PostsSumAggregate;

    @Field(() => PostsMinAggregate, {nullable:true})
    _min?: PostsMinAggregate;

    @Field(() => PostsMaxAggregate, {nullable:true})
    _max?: PostsMaxAggregate;
}
