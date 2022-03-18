import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
export declare class AggregateUser {
    _count?: UserCountAggregate;
    count?: UserCountAggregate;
    _avg?: UserAvgAggregate;
    avg?: UserAvgAggregate;
    _sum?: UserSumAggregate;
    sum?: UserSumAggregate;
    _min?: UserMinAggregate;
    min?: UserMinAggregate;
    _max?: UserMaxAggregate;
    max?: UserMaxAggregate;
}
