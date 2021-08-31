"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormLayout = exports.FormLabelAlign = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var FormLabelAlign;
(function (FormLabelAlign) {
    FormLabelAlign["left"] = "left";
    FormLabelAlign["right"] = "right";
})(FormLabelAlign = exports.FormLabelAlign || (exports.FormLabelAlign = {}));
var FormLayout;
(function (FormLayout) {
    FormLayout["horizontal"] = "horizontal";
    FormLayout["vertical"] = "vertical";
    FormLayout["inline"] = "inline";
})(FormLayout = exports.FormLayout || (exports.FormLayout = {}));
const Form = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(antd_1.Form, Object.assign({}, props), children));
};
Form.Item = antd_1.Form.Item;
Form.List = antd_1.Form.List;
Form.useForm = antd_1.Form.useForm;
exports.default = Form;
//# sourceMappingURL=Form.js.map