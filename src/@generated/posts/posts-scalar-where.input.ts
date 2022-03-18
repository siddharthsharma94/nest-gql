import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PostsScalarWhereInput {

    @Field(() => [PostsScalarWhereInput], {nullable:true})
    AND?: Array<PostsScalarWhereInput>;

    @Field(() => [PostsScalarWhereInput], {nullable:true})
    OR?: Array<PostsScalarWhereInput>;

    @Field(() => [PostsScalarWhereInput], {nullable:true})
    NOT?: Array<PostsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
