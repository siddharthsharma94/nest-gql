import { User } from '../user/user.model';
export declare class Posts {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    createdBy?: User;
    userId: number;
}
