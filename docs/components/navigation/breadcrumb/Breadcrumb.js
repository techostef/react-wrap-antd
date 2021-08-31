"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Breadcrumb = (props) => {
    return (react_1.default.createElement(antd_1.Breadcrumb, Object.assign({}, props)));
};
Breadcrumb.Item = antd_1.Breadcrumb.Item;
Breadcrumb.Separator = antd_1.Breadcrumb.Separator;
exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map