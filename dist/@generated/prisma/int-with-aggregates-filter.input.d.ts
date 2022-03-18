import { NestedIntWithAggregatesFilter } from './nested-int-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter;
    _count?: NestedIntFilter;
    count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    min?: NestedIntFilter;
    _max?: NestedIntFilter;
    max?: NestedIntFilter;
}
