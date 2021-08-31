"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarShapes = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var AvatarShapes;
(function (AvatarShapes) {
    AvatarShapes["circle"] = "circle";
    AvatarShapes["square"] = "square";
})(AvatarShapes = exports.AvatarShapes || (exports.AvatarShapes = {}));
const Avatar = (props) => {
    return (react_1.default.createElement(antd_1.Avatar, Object.assign({}, props)));
};
Avatar.Group = antd_1.Avatar.Group;
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map