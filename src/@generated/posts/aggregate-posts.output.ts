import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsAvgAggregate } from './posts-avg-aggregate.output';
import { PostsSumAggregate } from './posts-sum-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';

@ObjectType()
export class AggregatePosts {

    @Field(() => PostsCountAggregate, {nullable:true})
    _count?: PostsCountAggregate;

    @Field(() => PostsCountAggregate, {nullable:true})
    count?: PostsCountAggregate;

    @Field(() => PostsAvgAggregate, {nullable:true})
    _avg?: PostsAvgAggregate;

    @Field(() => PostsAvgAggregate, {nullable:true})
    avg?: PostsAvgAggregate;

    @Field(() => PostsSumAggregate, {nullable:true})
    _sum?: PostsSumAggregate;

    @Field(() => PostsSumAggregate, {nullable:true})
    sum?: PostsSumAggregate;

    @Field(() => PostsMinAggregate, {nullable:true})
    _min?: PostsMinAggregate;

    @Field(() => PostsMinAggregate, {nullable:true})
    min?: PostsMinAggregate;

    @Field(() => PostsMaxAggregate, {nullable:true})
    _max?: PostsMaxAggregate;

    @Field(() => PostsMaxAggregate, {nullable:true})
    max?: PostsMaxAggregate;
}
