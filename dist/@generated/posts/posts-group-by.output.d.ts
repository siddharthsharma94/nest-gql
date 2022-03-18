import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsAvgAggregate } from './posts-avg-aggregate.output';
import { PostsSumAggregate } from './posts-sum-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';
export declare class PostsGroupBy {
    id: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    content: string;
    userId: number;
    _count?: PostsCountAggregate;
    _avg?: PostsAvgAggregate;
    _sum?: PostsSumAggregate;
    _min?: PostsMinAggregate;
    _max?: PostsMaxAggregate;
}
