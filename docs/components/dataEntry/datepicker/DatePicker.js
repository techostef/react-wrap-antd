"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerPicker = exports.PanelMode = exports.DatePickerMode = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var DatePickerMode;
(function (DatePickerMode) {
    DatePickerMode["time"] = "time";
    DatePickerMode["date"] = "date";
    DatePickerMode["month"] = "month";
    DatePickerMode["year"] = "year";
    DatePickerMode["decade"] = "decade";
})(DatePickerMode = exports.DatePickerMode || (exports.DatePickerMode = {}));
var PanelMode;
(function (PanelMode) {
    PanelMode["time"] = "time";
    PanelMode["date"] = "date";
    PanelMode["week"] = "week";
    PanelMode["month"] = "month";
    PanelMode["quarter"] = "quarter";
    PanelMode["year"] = "year";
    PanelMode["decade"] = "decade";
})(PanelMode = exports.PanelMode || (exports.PanelMode = {}));
var DatePickerPicker;
(function (DatePickerPicker) {
    DatePickerPicker["time"] = "time";
    DatePickerPicker["date"] = "date";
    DatePickerPicker["week"] = "week";
    DatePickerPicker["month"] = "month";
    DatePickerPicker["quarter"] = "quarter";
    DatePickerPicker["year"] = "year";
})(DatePickerPicker = exports.DatePickerPicker || (exports.DatePickerPicker = {}));
const DatePicker = (_a) => {
    var { children, picker } = _a, props = __rest(_a, ["children", "picker"]);
    return (react_1.default.createElement(antd_1.DatePicker, Object.assign({}, props, { picker: picker, size: props.size }), children));
};
DatePicker.WeekPicker = antd_1.DatePicker.WeekPicker;
DatePicker.MonthPicker = antd_1.DatePicker.MonthPicker;
DatePicker.YearPicker = antd_1.DatePicker.YearPicker;
DatePicker.RangePicker = antd_1.DatePicker.RangePicker;
DatePicker.TimePicker = antd_1.DatePicker.TimePicker;
DatePicker.QuarterPicker = antd_1.DatePicker.QuarterPicker;
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map