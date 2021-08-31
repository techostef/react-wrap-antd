"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionsSize = exports.DescriptionsLayout = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var DescriptionsLayout;
(function (DescriptionsLayout) {
    DescriptionsLayout["horizontal"] = "horizontal";
    DescriptionsLayout["vertical"] = "vertical";
})(DescriptionsLayout = exports.DescriptionsLayout || (exports.DescriptionsLayout = {}));
var DescriptionsSize;
(function (DescriptionsSize) {
    DescriptionsSize["default"] = "default";
    DescriptionsSize["middle"] = "middle";
    DescriptionsSize["small"] = "small";
})(DescriptionsSize = exports.DescriptionsSize || (exports.DescriptionsSize = {}));
const Descriptions = (props) => {
    return (react_1.default.createElement(antd_1.Descriptions, Object.assign({}, props)));
};
Descriptions.Item = antd_1.Descriptions.Item;
exports.default = Descriptions;
//# sourceMappingURL=Descriptions.js.map