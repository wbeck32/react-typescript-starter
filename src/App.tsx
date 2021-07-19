import React, {FunctionComponent} from "react";
import Page from "./components/Page";
import {ThemeProvider} from "styled-components";
import theme from "./theme";


const App: FunctionComponent = () => {
	return <ThemeProvider theme={theme}><Page /></ThemeProvider>;
};

export default App;
