"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Image = (props) => {
    return (react_1.default.createElement(antd_1.Image, Object.assign({}, props)));
};
Image.PreviewGroup = antd_1.Image.PreviewGroup;
exports.default = Image;
//# sourceMappingURL=Image.js.map