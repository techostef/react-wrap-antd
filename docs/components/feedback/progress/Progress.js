"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressSize = exports.ProgressType = exports.ProgressStrokeLineCap = exports.ProgressStatus = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var ProgressStatus;
(function (ProgressStatus) {
    ProgressStatus["active"] = "active";
    ProgressStatus["exception"] = "exception";
    ProgressStatus["normal"] = "normal";
    ProgressStatus["success"] = "success";
})(ProgressStatus = exports.ProgressStatus || (exports.ProgressStatus = {}));
var ProgressStrokeLineCap;
(function (ProgressStrokeLineCap) {
    ProgressStrokeLineCap["round"] = "round";
    ProgressStrokeLineCap["square"] = "square";
})(ProgressStrokeLineCap = exports.ProgressStrokeLineCap || (exports.ProgressStrokeLineCap = {}));
var ProgressType;
(function (ProgressType) {
    ProgressType["line"] = "line";
    ProgressType["circle"] = "circle";
    ProgressType["dashboard"] = "dashboard";
})(ProgressType = exports.ProgressType || (exports.ProgressType = {}));
var ProgressSize;
(function (ProgressSize) {
    ProgressSize["small"] = "small";
    ProgressSize["middle"] = "middle";
})(ProgressSize = exports.ProgressSize || (exports.ProgressSize = {}));
const Progress = (props) => {
    return (react_1.default.createElement(antd_1.Progress, Object.assign({}, props)));
};
exports.default = Progress;
//# sourceMappingURL=Progress.js.map