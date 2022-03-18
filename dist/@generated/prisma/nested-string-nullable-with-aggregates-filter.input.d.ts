import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedStringNullableFilter } from './nested-string-nullable-filter.input';
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter;
    _count?: NestedIntNullableFilter;
    count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
    max?: NestedStringNullableFilter;
}
