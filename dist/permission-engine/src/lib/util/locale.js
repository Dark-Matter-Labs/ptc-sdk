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
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryNameToCode = exports.countryCodeToLanguage = void 0;
const type_1 = require("../type");
const CountryLanguage = __importStar(require("@ladjs/country-language"));
const countryCodeToLanguage = (countryCode) => {
    var _a, _b;
    let languageCode = (_b = (_a = CountryLanguage.getCountryLanguages(countryCode)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.iso639_1;
    switch (countryCode) {
        case 'KR':
            languageCode = type_1.Language.ko;
            break;
        case 'UK':
        case 'GB':
        case 'US':
        case 'USA':
        case 'CA':
            languageCode = type_1.Language.en;
            break;
        default:
            languageCode = type_1.Language.en;
            break;
    }
    return languageCode;
};
exports.countryCodeToLanguage = countryCodeToLanguage;
const countryNameToCode = (name) => {
    var _a, _b;
    const allCountries = CountryLanguage.getCountries();
    return ((_b = (_a = allCountries.find((item) => [item.name, item.code_2, item.code_3, item.numCode].includes(name))) === null || _a === void 0 ? void 0 : _a.code_2) !== null && _b !== void 0 ? _b : null);
};
exports.countryNameToCode = countryNameToCode;
//# sourceMappingURL=locale.js.map