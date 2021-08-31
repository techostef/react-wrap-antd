"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownPlacement = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var DropdownPlacement;
(function (DropdownPlacement) {
    DropdownPlacement["bottomLeft"] = "bottomLeft";
    DropdownPlacement["bottomCenter"] = "bottomCenter";
    DropdownPlacement["bottomRight"] = "bottomRight";
    DropdownPlacement["topLeft"] = "topLeft";
    DropdownPlacement["topCenter"] = "topCenter";
    DropdownPlacement["topRight"] = "topRight";
})(DropdownPlacement = exports.DropdownPlacement || (exports.DropdownPlacement = {}));
const Dropdown = (props) => {
    return (react_1.default.createElement(antd_1.Dropdown, Object.assign({}, props)));
};
Dropdown.Button = antd_1.Dropdown.Button;
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map