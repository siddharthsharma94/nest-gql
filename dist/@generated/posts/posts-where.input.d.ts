import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class PostsWhereInput {
    AND?: Array<PostsWhereInput>;
    OR?: Array<PostsWhereInput>;
    NOT?: Array<PostsWhereInput>;
    id?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    content?: StringFilter;
    createdBy?: UserRelationFilter;
    userId?: IntFilter;
}
