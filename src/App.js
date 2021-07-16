"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Container_1 = __importDefault(require("./components/Container"));
const styled_components_1 = require("styled-components");
const theme_1 = __importDefault(require("./theme"));
const App = () => {
    return react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
        react_1.default.createElement(Container_1.default, { title: "hello chum!" }));
};
exports.default = App;
//# sourceMappingURL=App.js.map