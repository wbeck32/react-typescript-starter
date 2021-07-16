"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_1 = __importDefault(require("./Header"));
var Main_1 = __importDefault(require("./Main"));
var Footer_1 = __importDefault(require("./Footer"));
var Container = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, { message: title }),
        react_1.default.createElement(Main_1.default, { title: "main" }),
        react_1.default.createElement(Footer_1.default, { message: "I am the footer" })));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map