"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeStatus = exports.BadgeSize = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var BadgeSize;
(function (BadgeSize) {
    BadgeSize["default"] = "default";
    BadgeSize["small"] = "small,";
})(BadgeSize = exports.BadgeSize || (exports.BadgeSize = {}));
var BadgeStatus;
(function (BadgeStatus) {
    BadgeStatus["default"] = "default";
    BadgeStatus["error"] = "error";
    BadgeStatus["processing"] = "processing";
    BadgeStatus["success"] = "success";
    BadgeStatus["warning"] = "warning";
})(BadgeStatus = exports.BadgeStatus || (exports.BadgeStatus = {}));
const Badge = (props) => {
    return (react_1.default.createElement(antd_1.Badge, Object.assign({}, props)));
};
Badge.Ribbon = antd_1.Badge.Ribbon;
exports.default = Badge;
//# sourceMappingURL=Badge.js.map