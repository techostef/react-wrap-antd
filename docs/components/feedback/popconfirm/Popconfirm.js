"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopconfirmButtonType = exports.PopconfirmTrigger = exports.PopconfirmPlacement = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var PopconfirmPlacement;
(function (PopconfirmPlacement) {
    PopconfirmPlacement["topLeft"] = "topLeft";
    PopconfirmPlacement["top"] = "top";
    PopconfirmPlacement["topRight"] = "topRight";
    PopconfirmPlacement["leftTop"] = "leftTop";
    PopconfirmPlacement["left"] = "left";
    PopconfirmPlacement["leftBottom"] = "leftBottom";
    PopconfirmPlacement["rightTop"] = "rightTop";
    PopconfirmPlacement["right"] = "right";
    PopconfirmPlacement["rightBottom"] = "rightBottom";
    PopconfirmPlacement["bottomLeft"] = "bottomLeft";
    PopconfirmPlacement["bottom"] = "bottom";
    PopconfirmPlacement["bottomRight"] = "bottomRight";
})(PopconfirmPlacement = exports.PopconfirmPlacement || (exports.PopconfirmPlacement = {}));
var PopconfirmTrigger;
(function (PopconfirmTrigger) {
    PopconfirmTrigger["click"] = "click";
    PopconfirmTrigger["hover"] = "hover";
    PopconfirmTrigger["focus"] = "focus";
})(PopconfirmTrigger = exports.PopconfirmTrigger || (exports.PopconfirmTrigger = {}));
var PopconfirmButtonType;
(function (PopconfirmButtonType) {
    PopconfirmButtonType["primary"] = "primary";
})(PopconfirmButtonType = exports.PopconfirmButtonType || (exports.PopconfirmButtonType = {}));
const Popconfirm = (props) => {
    return (react_1.default.createElement(antd_1.Popconfirm, Object.assign({}, props)));
};
exports.default = Popconfirm;
//# sourceMappingURL=Popconfirm.js.map