"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsType = exports.StepsStatus = exports.StepsSize = exports.StepsLabelPlacement = exports.StepsDirection = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var StepsDirection;
(function (StepsDirection) {
    StepsDirection["horizontal"] = "horizontal";
    StepsDirection["vertical"] = "vertical";
})(StepsDirection = exports.StepsDirection || (exports.StepsDirection = {}));
var StepsLabelPlacement;
(function (StepsLabelPlacement) {
    StepsLabelPlacement["horizontal"] = "horizontal";
    StepsLabelPlacement["vertical"] = "vertical";
})(StepsLabelPlacement = exports.StepsLabelPlacement || (exports.StepsLabelPlacement = {}));
var StepsSize;
(function (StepsSize) {
    StepsSize["default"] = "default";
    StepsSize["small"] = "small";
})(StepsSize = exports.StepsSize || (exports.StepsSize = {}));
var StepsStatus;
(function (StepsStatus) {
    StepsStatus["error"] = "error";
    StepsStatus["finish"] = "finish";
    StepsStatus["process"] = "process";
    StepsStatus["wait"] = "wait";
})(StepsStatus = exports.StepsStatus || (exports.StepsStatus = {}));
var StepsType;
(function (StepsType) {
    StepsType["default"] = "default";
    StepsType["navigation"] = "navigation";
})(StepsType = exports.StepsType || (exports.StepsType = {}));
const Steps = (props) => {
    return (react_1.default.createElement(antd_1.Steps, Object.assign({}, props)));
};
Steps.Step = antd_1.Steps.Step;
exports.default = Steps;
//# sourceMappingURL=Steps.js.map