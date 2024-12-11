export declare class CreateSpaceDto {
    name: string;
    zipcode: string;
    country: string;
    region: string;
    city: string;
    district: string;
    address: string;
    latitude: string;
    longitude: string;
    ruleId: string;
    details: string;
    link?: string;
    timezone?: string;
    images?: Express.Multer.File[];
    topicIds?: string[];
}
