"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Layout = (props) => {
    return (react_1.default.createElement(antd_1.Layout, Object.assign({}, props)));
};
Layout.Header = antd_1.Layout.Header;
Layout.Sider = antd_1.Layout.Sider;
Layout.Content = antd_1.Layout.Content;
Layout.Footer = antd_1.Layout.Footer;
exports.default = Layout;
//# sourceMappingURL=Layout.js.map