"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const antd_1 = require("antd");
const Typography = ({ children, className, dataTestId, id, style, }) => {
    return (react_1.default.createElement(antd_1.Typography, { className: className, "data-testid": dataTestId, id: id, style: style }, children));
};
Typography.Link = antd_1.Typography.Link;
Typography.Paragraph = antd_1.Typography.Paragraph;
Typography.Text = antd_1.Typography.Text;
Typography.Title = antd_1.Typography.Title;
Typography.defaultProps = {
    children: null,
    className: '',
    dataTestId: undefined,
};
Typography.propTypes = {
    children: prop_types_1.default.any,
    className: prop_types_1.default.string,
    dataTestId: prop_types_1.default.string,
};
exports.default = Typography;
//# sourceMappingURL=Typography.js.map