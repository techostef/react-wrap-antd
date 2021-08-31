"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationSize = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var PaginationSize;
(function (PaginationSize) {
    PaginationSize["default"] = "default";
    PaginationSize["small"] = "small";
})(PaginationSize = exports.PaginationSize || (exports.PaginationSize = {}));
const Pagination = (props) => {
    return (react_1.default.createElement(antd_1.Pagination, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Pagination);
//# sourceMappingURL=Pagination.js.map