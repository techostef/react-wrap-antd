"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowJustify = exports.RowAlign = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var RowAlign;
(function (RowAlign) {
    RowAlign["top"] = "top";
    RowAlign["middle"] = "middle";
    RowAlign["bottom"] = "bottom";
})(RowAlign = exports.RowAlign || (exports.RowAlign = {}));
var RowJustify;
(function (RowJustify) {
    RowJustify["start"] = "start";
    RowJustify["end"] = "end";
    RowJustify["center"] = "center";
    RowJustify["spaceAround"] = "space-around";
    RowJustify["spaceBetween"] = "space-between";
})(RowJustify = exports.RowJustify || (exports.RowJustify = {}));
const Row = (props) => {
    return (react_1.default.createElement(antd_1.Row, Object.assign({}, props)));
};
exports.default = Row;
//# sourceMappingURL=Row.js.map