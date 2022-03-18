import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsInput } from '../user/user-update-one-required-without-posts.input';
export declare class PostsUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    content?: StringFieldUpdateOperationsInput;
    createdBy?: UserUpdateOneRequiredWithoutPostsInput;
}
