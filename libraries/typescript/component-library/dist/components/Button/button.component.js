"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    return (react_1.default.createElement("button", { onClick: props.onClick }, props.label));
};
exports.Button = Button;
//# sourceMappingURL=button.component.js.map