"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Modal = (props) => {
    return (react_1.default.createElement(antd_1.Modal, Object.assign({}, props)));
};
Modal.info = antd_1.Modal.info;
Modal.success = antd_1.Modal.success;
Modal.error = antd_1.Modal.error;
Modal.warning = antd_1.Modal.warning;
Modal.confirm = antd_1.Modal.confirm;
exports.default = Modal;
//# sourceMappingURL=Modal.js.map