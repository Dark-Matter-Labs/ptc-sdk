import { UserType } from '../../../lib/type';
export declare class UpdateUserDto {
    name?: string;
    email?: string;
    type?: UserType;
    birthYear?: number;
    country?: string;
    region?: string;
    city?: string;
    district?: string;
    details?: string;
    image?: string;
    isActive?: boolean;
    isSubscribe?: boolean;
}
