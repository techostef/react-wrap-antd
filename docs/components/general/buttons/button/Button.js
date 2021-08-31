"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonHtmlType = exports.ButtonShape = exports.ButtonSize = exports.ButtonType = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var ButtonType;
(function (ButtonType) {
    ButtonType["default"] = "default";
    ButtonType["dashed"] = "dashed";
    ButtonType["ghost"] = "ghost";
    ButtonType["primary"] = "primary";
    ButtonType["text"] = "text";
    ButtonType["link"] = "link";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["middle"] = "middle";
    ButtonSize["large"] = "large";
    ButtonSize["small"] = "small";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
var ButtonShape;
(function (ButtonShape) {
    ButtonShape["circle"] = "circle";
    ButtonShape["round"] = "round";
    ButtonShape["default"] = "default";
})(ButtonShape = exports.ButtonShape || (exports.ButtonShape = {}));
var ButtonHtmlType;
(function (ButtonHtmlType) {
    ButtonHtmlType["button"] = "button";
    ButtonHtmlType["submit"] = "submit";
    ButtonHtmlType["reset"] = "reset";
})(ButtonHtmlType = exports.ButtonHtmlType || (exports.ButtonHtmlType = {}));
const Button = (props) => {
    return (react_1.default.createElement(antd_1.Button, Object.assign({}, props), props.children));
};
exports.default = react_1.default.memo(Button);
//# sourceMappingURL=Button.js.map