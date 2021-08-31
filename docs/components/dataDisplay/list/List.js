"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemSize = exports.ListItemLayout = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var ListItemLayout;
(function (ListItemLayout) {
    ListItemLayout["horizontal"] = "horizontal";
    ListItemLayout["vertical"] = "vertical";
})(ListItemLayout = exports.ListItemLayout || (exports.ListItemLayout = {}));
var ListItemSize;
(function (ListItemSize) {
    ListItemSize["default"] = "default";
    ListItemSize["large"] = "large";
    ListItemSize["small"] = "small";
})(ListItemSize = exports.ListItemSize || (exports.ListItemSize = {}));
const List = (props) => {
    return (react_1.default.createElement(antd_1.List, Object.assign({}, props)));
};
List.Item = antd_1.List.Item;
exports.default = List;
//# sourceMappingURL=List.js.map