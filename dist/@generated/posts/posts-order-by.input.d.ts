import { SortOrder } from '../prisma/sort-order.enum';
export declare class PostsOrderByInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
