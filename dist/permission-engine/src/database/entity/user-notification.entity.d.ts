import { User } from './user.entity';
import { UserNotificationStatus, UserNotificationTarget, UserNotificationTemplateName, UserNotificationType } from '../../lib/type';
export declare class UserNotification {
    id: string;
    user: User;
    userId: string;
    target: UserNotificationTarget;
    type: UserNotificationType;
    status: UserNotificationStatus;
    externalServiceId: string;
    link: string;
    templateName: UserNotificationTemplateName;
    subjectPart: string;
    textPart: string;
    htmlPart: string;
    params: Record<string, any>;
    messageId: string;
    errorMessage: string;
    createdAt: Date;
    updatedAt: Date;
}
