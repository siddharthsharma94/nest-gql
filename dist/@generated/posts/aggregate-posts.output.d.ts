import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsAvgAggregate } from './posts-avg-aggregate.output';
import { PostsSumAggregate } from './posts-sum-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';
export declare class AggregatePosts {
    _count?: PostsCountAggregate;
    count?: PostsCountAggregate;
    _avg?: PostsAvgAggregate;
    avg?: PostsAvgAggregate;
    _sum?: PostsSumAggregate;
    sum?: PostsSumAggregate;
    _min?: PostsMinAggregate;
    min?: PostsMinAggregate;
    _max?: PostsMaxAggregate;
    max?: PostsMaxAggregate;
}
