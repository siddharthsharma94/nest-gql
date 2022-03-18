import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserOrderByInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
}
