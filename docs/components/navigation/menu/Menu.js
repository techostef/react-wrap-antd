"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuTriggerSubMenuAction = exports.MenuTheme = exports.MenuMode = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var MenuMode;
(function (MenuMode) {
    MenuMode["horizontal"] = "horizontal";
    MenuMode["inline"] = "inline";
    MenuMode["vertical"] = "vertical";
})(MenuMode = exports.MenuMode || (exports.MenuMode = {}));
var MenuTheme;
(function (MenuTheme) {
    MenuTheme["dark"] = "dark";
    MenuTheme["light"] = "light";
})(MenuTheme = exports.MenuTheme || (exports.MenuTheme = {}));
var MenuTriggerSubMenuAction;
(function (MenuTriggerSubMenuAction) {
    MenuTriggerSubMenuAction["click"] = "click";
    MenuTriggerSubMenuAction["hover"] = "hover";
})(MenuTriggerSubMenuAction = exports.MenuTriggerSubMenuAction || (exports.MenuTriggerSubMenuAction = {}));
const Menu = (props) => {
    return (react_1.default.createElement(antd_1.Menu, Object.assign({}, props)));
};
Menu.Divider = antd_1.Menu.Divider;
Menu.Item = antd_1.Menu.Item;
Menu.ItemGroup = antd_1.Menu.ItemGroup;
Menu.SubMenu = antd_1.Menu.SubMenu;
exports.default = Menu;
//# sourceMappingURL=Menu.js.map