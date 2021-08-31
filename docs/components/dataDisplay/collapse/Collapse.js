"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseCollapsible = exports.CollapseExpandIConPosition = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var CollapseExpandIConPosition;
(function (CollapseExpandIConPosition) {
    CollapseExpandIConPosition["left"] = "left";
    CollapseExpandIConPosition["right"] = "right";
})(CollapseExpandIConPosition = exports.CollapseExpandIConPosition || (exports.CollapseExpandIConPosition = {}));
var CollapseCollapsible;
(function (CollapseCollapsible) {
    CollapseCollapsible["disabled"] = "disabled";
    CollapseCollapsible["header"] = "header,";
})(CollapseCollapsible = exports.CollapseCollapsible || (exports.CollapseCollapsible = {}));
const Collapse = (props) => {
    return (react_1.default.createElement(antd_1.Collapse, Object.assign({}, props)));
};
Collapse.Panel = antd_1.Collapse.Panel;
exports.default = Collapse;
//# sourceMappingURL=Collapse.js.map