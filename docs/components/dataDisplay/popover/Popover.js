"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverPlacement = exports.PopoverTrigger = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var PopoverTrigger;
(function (PopoverTrigger) {
    PopoverTrigger["click"] = "click";
    PopoverTrigger["focus"] = "focus";
    PopoverTrigger["hover"] = "hover";
})(PopoverTrigger = exports.PopoverTrigger || (exports.PopoverTrigger = {}));
var PopoverPlacement;
(function (PopoverPlacement) {
    PopoverPlacement["topLeft"] = "topLeft";
    PopoverPlacement["top"] = "top";
    PopoverPlacement["topRight"] = "topRight";
    PopoverPlacement["leftTop"] = "leftTop";
    PopoverPlacement["left"] = "left";
    PopoverPlacement["leftBottom"] = "leftBottom";
    PopoverPlacement["rightTop"] = "rightTop";
    PopoverPlacement["right"] = "right";
    PopoverPlacement["rightBottom"] = "rightBottom";
    PopoverPlacement["bottomLeft"] = "bottomLeft";
    PopoverPlacement["bottom"] = "bottom";
    PopoverPlacement["bottomRight"] = "bottomRight";
})(PopoverPlacement = exports.PopoverPlacement || (exports.PopoverPlacement = {}));
const Popover = (props) => {
    return (react_1.default.createElement(antd_1.Popover, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Popover);
//# sourceMappingURL=Popover.js.map