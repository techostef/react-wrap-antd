"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceSize = exports.SpaceDirection = exports.SpaceAlign = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var SpaceAlign;
(function (SpaceAlign) {
    SpaceAlign["start"] = "start";
    SpaceAlign["end"] = "end";
    SpaceAlign["center"] = "center";
    SpaceAlign["baseline"] = "baseline";
})(SpaceAlign = exports.SpaceAlign || (exports.SpaceAlign = {}));
;
var SpaceDirection;
(function (SpaceDirection) {
    SpaceDirection["vertical"] = "vertical";
    SpaceDirection["horizontal"] = "horizontal";
})(SpaceDirection = exports.SpaceDirection || (exports.SpaceDirection = {}));
;
var SpaceSize;
(function (SpaceSize) {
    SpaceSize["small"] = "small";
    SpaceSize["middle"] = "middle";
    SpaceSize["large"] = "large";
})(SpaceSize = exports.SpaceSize || (exports.SpaceSize = {}));
;
const Space = (props) => {
    return (react_1.default.createElement("div", { style: {
            flex: 'none',
            margin: '8px 4px',
            padding: '4px',
            border: '1px solid #40a9ff',
        } },
        react_1.default.createElement(antd_1.Space, Object.assign({}, props))));
};
exports.default = react_1.default.memo(Space);
//# sourceMappingURL=Space.js.map