"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectHtmlElement = exports.isInAvailabilities = exports.formatTime = exports.getAvailabilityIntervals = exports.parseTimeManipulation = exports.getDayIndex = exports.generateRandomCode = exports.hash = void 0;
const crypto = __importStar(require("crypto"));
const cheerio = __importStar(require("cheerio"));
const type_1 = require("../type");
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const dayjs_abbr_timezone_1 = __importDefault(require("dayjs-abbr-timezone"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(dayjs_abbr_timezone_1.default);
const hash = (str) => {
    return crypto.createHash('sha256').update(str).digest('hex');
};
exports.hash = hash;
const generateRandomCode = (length = 8) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const bytes = crypto.randomBytes(length);
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = bytes[i] % characters.length;
        result += characters[randomIndex];
    }
    return result;
};
exports.generateRandomCode = generateRandomCode;
const getDayIndex = (day) => {
    let index = 0;
    switch (day) {
        case 'sun':
            index = 0;
            break;
        case 'mon':
            index = 1;
            break;
        case 'tue':
            index = 2;
            break;
        case 'wed':
            index = 3;
            break;
        case 'thu':
            index = 4;
            break;
        case 'fri':
            index = 5;
            break;
        case 'sat':
            index = 6;
            break;
        default:
            break;
    }
    return index;
};
exports.getDayIndex = getDayIndex;
const parseTimeManipulation = (manupulation) => {
    const match = manupulation.match(/^(\d+)([dwMyhms]+)$/);
    const numberPart = parseInt(match[1], 10);
    const stringPart = match[2];
    return {
        numberPart,
        stringPart,
    };
};
exports.parseTimeManipulation = parseTimeManipulation;
const getAvailabilityIntervals = (option) => {
    const { startDate, endDate, unit, buffer, availabilities, unavailableRanges, timezone, } = option;
    const MAX_INTERVALS = 100000;
    const MAX_ITERATIONS = 31 * 24 * 60 * 60 * 1000;
    const intervals = [];
    let currentDate = (0, dayjs_1.default)(startDate).tz(timezone).startOf('day');
    const finalDate = (0, dayjs_1.default)(endDate).tz(timezone).add(1, 'day').endOf('day');
    const nowDate = (0, dayjs_1.default)().tz(timezone);
    // Parse the unit (e.g., '30m', '1h', '1d') and get the corresponding milliseconds
    const unitAmount = parseInt(unit.slice(0, -1), 10); // Extract the number (30, 1, etc.)
    const unitType = unit.slice(-1); // Extract the unit type ('m', 'h', 'd')
    const bufferAmount = parseInt(buffer.slice(0, -1), 10); // Extract the number (30, 1, etc.)
    const bufferType = buffer.slice(-1); // Extract the buffer type ('m', 'h', 'd')
    let unitMillis;
    switch (unitType) {
        case 'm': // minutes
            unitMillis = unitAmount * 60 * 1000;
            break;
        case 'h': // hours
            unitMillis = unitAmount * 60 * 60 * 1000;
            break;
        case 'd': // days
            unitMillis = unitAmount * 24 * 60 * 60 * 1000;
            break;
        default:
            throw new Error('Invalid unit type. Use "m", "h", or "d".');
    }
    if ((finalDate.toDate().getTime() - startDate.getTime()) / unitMillis >
        MAX_ITERATIONS) {
        throw new Error('Date range too large to process');
    }
    const availabilityMap = new Map();
    availabilities.forEach((item) => {
        const [day] = item.split(type_1.RuleBlockContentDivider.time);
        if (!availabilityMap.has(day)) {
            availabilityMap.set(day, []);
        }
        availabilityMap.get(day).push(item);
    });
    unavailableRanges.map((item) => {
        const { buffer } = item;
        const bufferAmount = parseInt(buffer.slice(0, -1), 10); // Extract the number (30, 1, etc.)
        const bufferType = buffer.slice(-1); // Extract the buffer type ('m', 'h', 'd')
        switch (bufferType) {
            case 'm': // minutes
                item.bufferMillis = bufferAmount * 60 * 1000;
                break;
            case 'h': // hours
                item.bufferMillis = bufferAmount * 60 * 60 * 1000;
                break;
            case 'd': // days
                item.bufferMillis = bufferAmount * 24 * 60 * 60 * 1000;
                break;
            default:
                throw new Error('Invalid buffer type. Use "m", "h", or "d".');
        }
    });
    const currentDayString = currentDate.format('ddd').toLowerCase();
    const firstAvailabilityRanges = availabilityMap.get(currentDayString) || [];
    const firstAvailability = firstAvailabilityRanges[0];
    if (firstAvailability) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, firstStartTime] = firstAvailability.split(type_1.RuleBlockContentDivider.time);
        const [firstHour, firstMinute] = firstStartTime.split(':');
        currentDate = currentDate
            .tz(timezone)
            .hour(Number(firstHour))
            .minute(Number(firstMinute));
    }
    // Loop through the date range and create the intervals
    while (currentDate < finalDate) {
        if (intervals.length > MAX_INTERVALS) {
            throw new Error('Too many intervals generated. Reduce the date range or change unit size.');
        }
        const currentDayString = currentDate.format('ddd').toLowerCase();
        const availabilityRanges = availabilityMap.get(currentDayString) || [];
        let nextDate = currentDate
            .tz(timezone)
            .add(unitAmount, unitType)
            .add(bufferAmount, bufferType);
        const reservation = unavailableRanges.find((item) => (0, dayjs_1.default)(item.startTime).tz(timezone) <= currentDate &&
            (0, dayjs_1.default)(item.endTime).tz(timezone) >= nextDate);
        // reset buffer offset for new date
        if (currentDate.format('ddd') !== nextDate.format('ddd')) {
            const nextAvailabilityRanges = availabilityMap.get(nextDate.format('ddd').toLowerCase()) || [];
            const nextAvailability = nextAvailabilityRanges[0];
            if (nextAvailability) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [_, nextStartTime] = nextAvailability.split(type_1.RuleBlockContentDivider.time);
                const [nextHour, nextMinute] = nextStartTime.split(':');
                nextDate = nextDate
                    .tz(timezone)
                    .hour(Number(nextHour))
                    .minute(Number(nextMinute));
            }
        }
        if (nextDate > (0, dayjs_1.default)(endDate).tz(timezone))
            break;
        for (const availability of availabilityRanges) {
            const [day, startTime, endTime] = availability.split(type_1.RuleBlockContentDivider.time);
            const [startHour, startMinute] = startTime.split(':');
            const [endHour, endMinute] = endTime.split(':');
            const startPoint = currentDate
                .tz(timezone)
                .hour(Number(startHour))
                .minute(Number(startMinute));
            const endPoint = currentDate
                .tz(timezone)
                .hour(Number(endHour))
                .minute(Number(endMinute));
            if (currentDate.format('ddd').toLowerCase() === day &&
                startPoint <= currentDate &&
                endPoint >= nextDate &&
                startPoint >= nowDate) {
                if (!!reservation === false) {
                    intervals.push({
                        startTime: currentDate.toDate(),
                        endTime: nextDate.toDate(),
                    });
                    break;
                }
            }
        }
        // Move to the next interval
        currentDate = nextDate;
    }
    return intervals;
};
exports.getAvailabilityIntervals = getAvailabilityIntervals;
// Convert time to a comparable value (HH:MM as string)
const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};
exports.formatTime = formatTime;
const isInAvailabilities = (availabilities, startTime, endTime) => {
    // Parse availability into a map { 'mon': { start: '09:30', end: '18:05' }, ... }
    const availabilityMap = availabilities.reduce((map, entry) => {
        const [day, start, end] = entry.split('-');
        map[day.toLowerCase()] = { start, end };
        return map;
    }, {});
    // Get the weekday (0 = Sunday, 1 = Monday, etc.)
    const dayNames = [
        type_1.DayOfWeek.sun,
        type_1.DayOfWeek.mon,
        type_1.DayOfWeek.tue,
        type_1.DayOfWeek.wed,
        type_1.DayOfWeek.thu,
        type_1.DayOfWeek.fri,
        type_1.DayOfWeek.sat,
    ];
    const startDay = dayNames[startTime.getUTCDay()];
    const endDay = dayNames[endTime.getUTCDay()];
    const startFormatted = (0, exports.formatTime)(startTime);
    const endFormatted = (0, exports.formatTime)(endTime);
    // Check if start and end times fall within the availability for each day
    if (availabilityMap[startDay] && availabilityMap[endDay]) {
        const startAvailable = availabilityMap[startDay];
        const endAvailable = availabilityMap[endDay];
        // Compare start and end times with availability
        const isStartValid = startFormatted >= startAvailable.start &&
            startFormatted <= startAvailable.end;
        const isEndValid = endFormatted >= endAvailable.start && endFormatted <= endAvailable.end;
        return isStartValid && isEndValid;
    }
    return false;
};
exports.isInAvailabilities = isInAvailabilities;
const selectHtmlElement = (html, selector) => {
    var _a, _b, _c, _d;
    const body = (_d = (_c = (_b = (_a = html === null || html === void 0 ? void 0 : html.split('<body>')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split('</body>')) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : html;
    const $ = cheerio.load(body.trim());
    const selectedElement = $(selector).html();
    return selectedElement;
};
exports.selectHtmlElement = selectHtmlElement;
//# sourceMappingURL=index.js.map