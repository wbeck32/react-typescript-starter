"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const styled_system_1 = require("styled-system");
const BigBox = styled_components_1.default.div `
	${styled_system_1.color}
	`;
const Box = () => {
    return (react_1.default.createElement(BigBox, { className: "some-class" }, "Red box"));
};
exports.default = Box;
//# sourceMappingURL=Box.js.map