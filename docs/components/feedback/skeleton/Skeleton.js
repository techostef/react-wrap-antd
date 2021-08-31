"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
;
const Skeleton = (props) => {
    return (react_1.default.createElement(antd_1.Skeleton, Object.assign({}, props)));
};
Skeleton.Avatar = antd_1.Skeleton.Avatar;
Skeleton.Input = antd_1.Skeleton.Input;
Skeleton.Button = antd_1.Skeleton.Button;
Skeleton.Image = antd_1.Skeleton.Image;
exports.default = Skeleton;
//# sourceMappingURL=Skeleton.js.map