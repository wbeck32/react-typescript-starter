"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Main_1 = __importDefault(require("./Main"));
const Footer_1 = __importDefault(require("./Footer"));
const Container = ({ title }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, { message: title }),
        react_1.default.createElement(Main_1.default, null),
        react_1.default.createElement(Footer_1.default, { message: "I am the footer" })));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map