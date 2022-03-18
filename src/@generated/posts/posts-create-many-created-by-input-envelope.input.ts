import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostsCreateManyCreatedByInput } from './posts-create-many-created-by.input';

@InputType()
export class PostsCreateManyCreatedByInputEnvelope {

    @Field(() => [PostsCreateManyCreatedByInput], {nullable:false})
    data!: Array<PostsCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
