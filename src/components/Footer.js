"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer = ({ textString, message }) => {
    return react_1.default.createElement("div", { className: "someClass" },
        message,
        " ",
        textString);
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map