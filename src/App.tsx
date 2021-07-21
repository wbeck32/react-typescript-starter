import React, {FunctionComponent} from "react";
import Container from "./components/Container";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import "./App.scss";


const App: FunctionComponent = () => {
	return <ThemeProvider theme={theme}><Container textString="app" message="message"/></ThemeProvider>;
};

export default App;
