"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header = ({ textString, message }) => {
    return react_1.default.createElement("header", null,
        message,
        " ",
        textString);
};
exports.default = Header;
//# sourceMappingURL=Header.js.map