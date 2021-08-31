"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSize = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var CardSize;
(function (CardSize) {
    CardSize["default"] = "default";
    CardSize["small"] = "small";
})(CardSize = exports.CardSize || (exports.CardSize = {}));
const Card = (props) => {
    return (react_1.default.createElement(antd_1.Card, Object.assign({}, props)));
};
Card.Grid = antd_1.Card.Grid;
Card.Meta = antd_1.Card.Meta;
exports.default = Card;
//# sourceMappingURL=Card.js.map