export declare class UpdateSpaceEventDto {
    name?: string;
    ruleId?: string;
    permissionRequestId?: string;
    externalServiceId?: string;
    details?: string;
    link?: string;
    callbackLink?: string;
    duration?: string;
    startsAt?: Date;
    removeSpaceEventImageIds?: string[];
    images?: Express.Multer.File[];
}
