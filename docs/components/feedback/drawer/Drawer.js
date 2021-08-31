"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerPlacement = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var DrawerPlacement;
(function (DrawerPlacement) {
    DrawerPlacement["top"] = "top";
    DrawerPlacement["bottom"] = "bottom";
    DrawerPlacement["right"] = "right";
    DrawerPlacement["left"] = "left";
})(DrawerPlacement = exports.DrawerPlacement || (exports.DrawerPlacement = {}));
;
const Drawer = (props) => {
    return (react_1.default.createElement(antd_1.Drawer, Object.assign({}, props)));
};
exports.default = Drawer;
//# sourceMappingURL=Drawer.js.map