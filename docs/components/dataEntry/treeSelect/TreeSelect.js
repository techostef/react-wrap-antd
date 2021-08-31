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
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const TreeSelect = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(antd_1.TreeSelect, Object.assign({}, props), children));
};
TreeSelect.TreeNode = antd_1.TreeSelect.TreeNode;
TreeSelect.SHOW_ALL = antd_1.TreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = antd_1.TreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = antd_1.TreeSelect.SHOW_CHILD;
exports.default = TreeSelect;
//# sourceMappingURL=TreeSelect.js.map