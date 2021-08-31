"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarMode = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var CalendarMode;
(function (CalendarMode) {
    CalendarMode["month"] = "month";
    CalendarMode["year"] = "year";
})(CalendarMode = exports.CalendarMode || (exports.CalendarMode = {}));
const Calendar = (props) => {
    return (react_1.default.createElement(antd_1.Calendar, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Calendar);
//# sourceMappingURL=Calendar.js.map