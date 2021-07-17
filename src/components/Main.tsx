import React, {FunctionComponent} from "react";
import Container from "./Container";
import styled from "styled-components";
import {color} from "styled-system";

type MainProps = {
}
const MainContainer = styled(Container)`
${color}
`;

const Main: FunctionComponent<MainProps> = () => {

	return (
		<div>
			<MainContainer color="buttonBlue">Main!</MainContainer>

		</div>
	);
};

export default Main;
