import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {color} from "styled-system";

const BigBox = styled.div`
${color}
`;

const Box:FunctionComponent = () => {

	return (
		<BigBox color="#fff" bg="red">
Red box
		</BigBox>
	);

};

export default Box;
