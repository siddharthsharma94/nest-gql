import { UserWhereInput } from './user-where.input';
import { UserOrderByInput } from './user-order-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
export declare class FindFirstUserArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByInput>;
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
