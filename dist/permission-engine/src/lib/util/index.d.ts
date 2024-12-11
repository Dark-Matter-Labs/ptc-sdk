import { DayOfWeek } from '../type';
export declare const hash: (str: string) => string;
export declare const generateRandomCode: (length?: number) => string;
export declare const getDayIndex: (day: DayOfWeek) => number;
export declare const parseTimeManipulation: (manupulation: string) => {
    numberPart: number;
    stringPart: string;
};
export type GetAvailabilityIntervalsOption = {
    startDate: Date;
    endDate: Date;
    unit: string;
    buffer: string;
    availabilities: string[];
    unavailableRanges: {
        startTime: Date;
        endTime: Date;
        buffer: string;
        bufferMillis?: number;
    }[];
    timezone: string;
};
export declare const getAvailabilityIntervals: (option: GetAvailabilityIntervalsOption) => any[];
export declare const formatTime: (date: Date) => string;
export declare const isInAvailabilities: (availabilities: string[], startTime: Date, endTime: Date) => boolean;
export declare const selectHtmlElement: (html: string, selector: string) => string;
