"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Main_1 = __importDefault(require("./Main"));
const Footer_1 = __importDefault(require("./Footer"));
const Container = () => {
    return (react_1.default.createElement("div", null,
        "-----",
        react_1.default.createElement(Header_1.default, { textString: "headerText", message: "lookAtMyHeader!" }),
        "-----",
        react_1.default.createElement(Main_1.default, { textString: "mainText", message: "lookAtMyMain!" }),
        "-----",
        react_1.default.createElement(Footer_1.default, { textString: "footerText", message: "lookAtMyFooter!" }),
        "-----"));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map