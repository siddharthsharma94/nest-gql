import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostsWhereInput } from './posts-where.input';
import { PostsOrderByInput } from './posts-order-by.input';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';
import { PostsScalarWhereWithAggregatesInput } from './posts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostsCountAggregateInput } from './posts-count-aggregate.input';
import { PostsAvgAggregateInput } from './posts-avg-aggregate.input';
import { PostsSumAggregateInput } from './posts-sum-aggregate.input';
import { PostsMinAggregateInput } from './posts-min-aggregate.input';
import { PostsMaxAggregateInput } from './posts-max-aggregate.input';

@ArgsType()
export class PostsGroupByArgs {

    @Field(() => PostsWhereInput, {nullable:true})
    where?: PostsWhereInput;

    @Field(() => [PostsOrderByInput], {nullable:true})
    orderBy?: Array<PostsOrderByInput>;

    @Field(() => [PostsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostsScalarFieldEnum>;

    @Field(() => PostsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostsCountAggregateInput, {nullable:true})
    _count?: PostsCountAggregateInput;

    @Field(() => PostsAvgAggregateInput, {nullable:true})
    _avg?: PostsAvgAggregateInput;

    @Field(() => PostsSumAggregateInput, {nullable:true})
    _sum?: PostsSumAggregateInput;

    @Field(() => PostsMinAggregateInput, {nullable:true})
    _min?: PostsMinAggregateInput;

    @Field(() => PostsMaxAggregateInput, {nullable:true})
    _max?: PostsMaxAggregateInput;
}
