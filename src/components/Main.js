"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Box_1 = __importDefault(require("./Box"));
const Main = ({ message, textString }) => {
    return (react_1.default.createElement("div", { className: "some-class" },
        message,
        " ",
        textString,
        react_1.default.createElement(Box_1.default, null)));
};
exports.default = Main;
//# sourceMappingURL=Main.js.map