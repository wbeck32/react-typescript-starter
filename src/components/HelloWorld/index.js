"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HelloWorld = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("h1", null, "Hello World"),
    react_1.default.createElement("hr", null),
    react_1.default.createElement("h3", null, "Environmental variables:"),
    react_1.default.createElement("p", null,
        "process.env.PRODUCTION: ",
        react_1.default.createElement("b", null, process.env.PRODUCTION.toString())),
    react_1.default.createElement("p", null,
        "process.env.NAME: ",
        react_1.default.createElement("b", null, process.env.NAME)),
    react_1.default.createElement("p", null,
        "process.env.VERSION: ",
        react_1.default.createElement("b", null, process.env.VERSION)))); };
exports.default = HelloWorld;
//# sourceMappingURL=index.js.map