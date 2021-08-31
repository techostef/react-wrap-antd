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
exports.CascaderPopupPlacement = exports.CascaderExpandTrigger = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var CascaderExpandTrigger;
(function (CascaderExpandTrigger) {
    CascaderExpandTrigger["click"] = "click";
    CascaderExpandTrigger["hover"] = "hover";
})(CascaderExpandTrigger = exports.CascaderExpandTrigger || (exports.CascaderExpandTrigger = {}));
var CascaderPopupPlacement;
(function (CascaderPopupPlacement) {
    CascaderPopupPlacement["bottomLeft"] = "bottomLeft";
    CascaderPopupPlacement["bottomRight"] = "bottomRight";
    CascaderPopupPlacement["topLeft"] = "topLeft";
    CascaderPopupPlacement["topRight"] = "topRight";
})(CascaderPopupPlacement = exports.CascaderPopupPlacement || (exports.CascaderPopupPlacement = {}));
const Cascader = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement(antd_1.Cascader, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Cascader);
//# sourceMappingURL=Cascader.js.map