"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
require("./Sidebar.scss");
const { Sider } = antd_1.Layout;
const { SubMenu } = antd_1.Menu;
const Sidebar = ({ menus, }) => {
    const [collapsed, setCollapsed] = react_1.useState(true);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
    const renderMenus = () => {
        return (menus === null || menus === void 0 ? void 0 : menus.map((item) => {
            if (item === null || item === void 0 ? void 0 : item.children) {
                return (react_1.default.createElement(SubMenu, { key: item === null || item === void 0 ? void 0 : item.id, icon: item === null || item === void 0 ? void 0 : item.icon, title: item.content }, item.children.map((item) => {
                    return (react_1.default.createElement(antd_1.Menu.Item, { key: item === null || item === void 0 ? void 0 : item.id, icon: item === null || item === void 0 ? void 0 : item.icon }, item === null || item === void 0 ? void 0 : item.content));
                })));
            }
            else {
                return (react_1.default.createElement(antd_1.Menu.Item, { key: item === null || item === void 0 ? void 0 : item.id, icon: item === null || item === void 0 ? void 0 : item.icon }, item === null || item === void 0 ? void 0 : item.content));
            }
        }));
    };
    return (react_1.default.createElement(antd_1.Layout, { className: "fmlx-sidebar", style: { minHeight: '100vh' } },
        react_1.default.createElement(Sider, { collapsible: true, collapsed: collapsed, onCollapse: onCollapse },
            react_1.default.createElement("div", { style: {
                    height: 32,
                    margin: 16,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                } }),
            react_1.default.createElement(antd_1.Menu, { mode: "inline", theme: "dark", defaultSelectedKeys: ['1'] }, renderMenus()))));
};
exports.default = react_1.default.memo(Sidebar);
//# sourceMappingURL=Sidebar.js.map