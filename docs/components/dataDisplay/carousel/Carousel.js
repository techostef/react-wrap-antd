"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselDotPosition = exports.CarouselEffect = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
var CarouselEffect;
(function (CarouselEffect) {
    CarouselEffect["fade"] = "fade";
    CarouselEffect["scrollx"] = "scrollx";
})(CarouselEffect = exports.CarouselEffect || (exports.CarouselEffect = {}));
var CarouselDotPosition;
(function (CarouselDotPosition) {
    CarouselDotPosition["bottom"] = "bottom";
    CarouselDotPosition["left"] = "left";
    CarouselDotPosition["right"] = "right";
    CarouselDotPosition["top"] = "top";
})(CarouselDotPosition = exports.CarouselDotPosition || (exports.CarouselDotPosition = {}));
const Carousel = (props) => {
    return (react_1.default.createElement(antd_1.Carousel, Object.assign({}, props)));
};
exports.default = react_1.default.memo(Carousel);
//# sourceMappingURL=Carousel.js.map