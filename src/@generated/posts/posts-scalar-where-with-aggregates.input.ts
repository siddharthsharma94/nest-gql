import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PostsScalarWhereWithAggregatesInput {

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => [PostsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
