"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerType = exports.DividerOrientation = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var DividerOrientation;
(function (DividerOrientation) {
    DividerOrientation["left"] = "left";
    DividerOrientation["right"] = "right";
    DividerOrientation["center"] = "center";
})(DividerOrientation = exports.DividerOrientation || (exports.DividerOrientation = {}));
var DividerType;
(function (DividerType) {
    DividerType["horizontal"] = "horizontal";
    DividerType["vertical"] = "vertical";
})(DividerType = exports.DividerType || (exports.DividerType = {}));
const Divider = (props) => {
    return (react_1.default.createElement(antd_1.Divider, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Divider);
//# sourceMappingURL=Divider.js.map