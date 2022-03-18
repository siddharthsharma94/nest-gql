import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostsUncheckedUpdateManyWithoutCreatedByInput } from '../posts/posts-unchecked-update-many-without-created-by.input';
export declare class UserUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    Posts?: PostsUncheckedUpdateManyWithoutCreatedByInput;
}
