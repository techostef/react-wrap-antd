"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class ErrorBoundary extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log error messages to an error reporting service here
    }
    render() {
        if (this.state.errorInfo) {
            // Error path
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "Something went wrong 1."),
                react_1.default.createElement("details", { style: { whiteSpace: 'pre-wrap' } },
                    this.state.error && this.state.error.toString(),
                    react_1.default.createElement("br", null),
                    this.state.errorInfo.componentStack)));
        }
        else {
            return this.props.children;
        }
        // Normally, just render children
    }
}
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map