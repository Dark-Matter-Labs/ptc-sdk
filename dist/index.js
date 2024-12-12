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
exports.UserAPI = exports.UserNotificationAPI = exports.TopicAPI = exports.SpaceAPI = exports.SpacePermissionerAPI = exports.SpaceHistoryAPI = exports.SpaceEventAPI = exports.SpaceEquipmentAPI = exports.SpaceApprovedRuleAPI = exports.RuleAPI = exports.RuleBlockAPI = exports.PermissionResponseAPI = exports.PermissionRequestAPI = exports.EmailAPI = exports.AuthAPI = exports.Locale = exports.Util = exports.Type = exports.ApiClient = void 0;
const api_client_1 = require("./src/api-client");
Object.defineProperty(exports, "ApiClient", { enumerable: true, get: function () { return api_client_1.ApiClient; } });
const Type = __importStar(require("./permission-engine/src/lib/type"));
exports.Type = Type;
const Util = __importStar(require("./permission-engine/src/lib/util"));
exports.Util = Util;
const Locale = __importStar(require("./permission-engine/src/lib/util/locale"));
exports.Locale = Locale;
const email_api_1 = require("./src/email.api");
Object.defineProperty(exports, "EmailAPI", { enumerable: true, get: function () { return email_api_1.EmailAPI; } });
const permission_request_api_1 = require("./src/permission-request.api");
Object.defineProperty(exports, "PermissionRequestAPI", { enumerable: true, get: function () { return permission_request_api_1.PermissionRequestAPI; } });
const permission_response_api_1 = require("./src/permission-response.api");
Object.defineProperty(exports, "PermissionResponseAPI", { enumerable: true, get: function () { return permission_response_api_1.PermissionResponseAPI; } });
const auth_api_1 = require("./src/auth.api");
Object.defineProperty(exports, "AuthAPI", { enumerable: true, get: function () { return auth_api_1.AuthAPI; } });
const rule_block_api_1 = require("./src/rule-block.api");
Object.defineProperty(exports, "RuleBlockAPI", { enumerable: true, get: function () { return rule_block_api_1.RuleBlockAPI; } });
const rule_api_1 = require("./src/rule.api");
Object.defineProperty(exports, "RuleAPI", { enumerable: true, get: function () { return rule_api_1.RuleAPI; } });
const space_approved_rule_api_1 = require("./src/space-approved-rule.api");
Object.defineProperty(exports, "SpaceApprovedRuleAPI", { enumerable: true, get: function () { return space_approved_rule_api_1.SpaceApprovedRuleAPI; } });
const space_equipment_api_1 = require("./src/space-equipment.api");
Object.defineProperty(exports, "SpaceEquipmentAPI", { enumerable: true, get: function () { return space_equipment_api_1.SpaceEquipmentAPI; } });
const space_event_api_1 = require("./src/space-event.api");
Object.defineProperty(exports, "SpaceEventAPI", { enumerable: true, get: function () { return space_event_api_1.SpaceEventAPI; } });
const space_history_api_1 = require("./src/space-history.api");
Object.defineProperty(exports, "SpaceHistoryAPI", { enumerable: true, get: function () { return space_history_api_1.SpaceHistoryAPI; } });
const space_permissioner_api_1 = require("./src/space-permissioner.api");
Object.defineProperty(exports, "SpacePermissionerAPI", { enumerable: true, get: function () { return space_permissioner_api_1.SpacePermissionerAPI; } });
const space_api_1 = require("./src/space.api");
Object.defineProperty(exports, "SpaceAPI", { enumerable: true, get: function () { return space_api_1.SpaceAPI; } });
const topic_api_1 = require("./src/topic.api");
Object.defineProperty(exports, "TopicAPI", { enumerable: true, get: function () { return topic_api_1.TopicAPI; } });
const user_notification_api_1 = require("./src/user-notification.api");
Object.defineProperty(exports, "UserNotificationAPI", { enumerable: true, get: function () { return user_notification_api_1.UserNotificationAPI; } });
const user_api_1 = require("./src/user.api");
Object.defineProperty(exports, "UserAPI", { enumerable: true, get: function () { return user_api_1.UserAPI; } });
//# sourceMappingURL=index.js.map