import { registerEnumType } from '@nestjs/graphql';

export enum PostsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    userId = "userId"
}


registerEnumType(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined })
