"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultStatus = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var ResultStatus;
(function (ResultStatus) {
    ResultStatus["success"] = "success";
    ResultStatus["error"] = "error";
    ResultStatus["info"] = "info";
    ResultStatus["warning"] = "warning";
    ResultStatus["http404"] = "404";
    ResultStatus["http403"] = "403";
    ResultStatus["http500"] = "500";
})(ResultStatus = exports.ResultStatus || (exports.ResultStatus = {}));
;
const Result = (props) => {
    return (react_1.default.createElement(antd_1.Result, Object.assign({}, props)));
};
exports.default = Result;
//# sourceMappingURL=Result.js.map