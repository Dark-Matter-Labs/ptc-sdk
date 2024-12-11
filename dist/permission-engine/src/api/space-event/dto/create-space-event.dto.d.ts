export declare class CreateSpaceEventDto {
    name: string;
    spaceId?: string;
    ruleId?: string;
    externalServiceId?: string;
    details?: string;
    link?: string;
    callbackLink?: string;
    duration: string;
    startsAt: Date;
    images?: Express.Multer.File[];
    topicIds?: string[];
}
