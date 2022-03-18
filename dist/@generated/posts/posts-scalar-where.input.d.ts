import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
export declare class PostsScalarWhereInput {
    AND?: Array<PostsScalarWhereInput>;
    OR?: Array<PostsScalarWhereInput>;
    NOT?: Array<PostsScalarWhereInput>;
    id?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    content?: StringFilter;
    userId?: IntFilter;
}
