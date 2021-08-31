"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertType = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var AlertType;
(function (AlertType) {
    AlertType["success"] = "success";
    AlertType["info"] = "info";
    AlertType["warning"] = "warning";
    AlertType["error"] = "error";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
;
const Alert = (props) => {
    return (react_1.default.createElement(antd_1.Alert, Object.assign({}, props)));
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map