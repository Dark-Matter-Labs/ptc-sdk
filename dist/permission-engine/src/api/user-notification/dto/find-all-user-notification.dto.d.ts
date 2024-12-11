import { UserNotificationStatus } from '../../../lib/type';
import { PaginationDto } from '../../../lib/dto';
export declare class FindAllUserNotificationDto extends PaginationDto {
    statuses?: UserNotificationStatus[];
}
