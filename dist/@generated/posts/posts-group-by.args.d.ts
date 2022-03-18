import { PostsWhereInput } from './posts-where.input';
import { PostsOrderByInput } from './posts-order-by.input';
import { PostsScalarFieldEnum } from './posts-scalar-field.enum';
import { PostsScalarWhereWithAggregatesInput } from './posts-scalar-where-with-aggregates.input';
import { PostsCountAggregateInput } from './posts-count-aggregate.input';
import { PostsAvgAggregateInput } from './posts-avg-aggregate.input';
import { PostsSumAggregateInput } from './posts-sum-aggregate.input';
import { PostsMinAggregateInput } from './posts-min-aggregate.input';
import { PostsMaxAggregateInput } from './posts-max-aggregate.input';
export declare class PostsGroupByArgs {
    where?: PostsWhereInput;
    orderBy?: Array<PostsOrderByInput>;
    by: Array<keyof typeof PostsScalarFieldEnum>;
    having?: PostsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostsCountAggregateInput;
    _avg?: PostsAvgAggregateInput;
    _sum?: PostsSumAggregateInput;
    _min?: PostsMinAggregateInput;
    _max?: PostsMaxAggregateInput;
}
