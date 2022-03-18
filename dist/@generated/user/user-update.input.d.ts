import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostsUpdateManyWithoutCreatedByInput } from '../posts/posts-update-many-without-created-by.input';
export declare class UserUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    Posts?: PostsUpdateManyWithoutCreatedByInput;
}
