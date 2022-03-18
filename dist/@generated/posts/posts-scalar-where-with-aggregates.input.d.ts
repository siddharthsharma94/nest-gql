import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
export declare class PostsScalarWhereWithAggregatesInput {
    AND?: Array<PostsScalarWhereWithAggregatesInput>;
    OR?: Array<PostsScalarWhereWithAggregatesInput>;
    NOT?: Array<PostsScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    content?: StringWithAggregatesFilter;
    userId?: IntWithAggregatesFilter;
}
