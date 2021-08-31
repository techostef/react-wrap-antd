"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinSize = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var SpinSize;
(function (SpinSize) {
    SpinSize["small"] = "small";
    SpinSize["medium"] = "medium";
    SpinSize["large"] = "large";
})(SpinSize = exports.SpinSize || (exports.SpinSize = {}));
const Spin = (props) => {
    return (react_1.default.createElement(antd_1.Spin, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Spin);
//# sourceMappingURL=Spin.js.map