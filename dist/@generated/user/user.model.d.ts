import { Posts } from '../posts/posts.model';
export declare class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string | null;
    Posts?: Array<Posts>;
}
