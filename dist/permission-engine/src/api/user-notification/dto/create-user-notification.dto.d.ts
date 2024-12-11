import { UserNotificationTarget, UserNotificationType, UserNotificationTemplateName } from '../../../lib/type';
export declare class CreateUserNotificationDto {
    userId: string;
    target: UserNotificationTarget;
    type: UserNotificationType;
    externalServiceId?: string;
    link?: string;
    templateName: UserNotificationTemplateName;
    subjectPart?: string;
    textPart?: string;
    htmlPart?: string;
    params?: Record<string, any>;
}
