import React, {FunctionComponent} from "react";
import styled from "styled-components";
// import {color} from "styled-system";


const getColor = props => {
	return {
		"color": props.color
	};
};

const BigBox = styled.div`
	${getColor}
	`;

const Box:FunctionComponent = () => {


	return (
		<BigBox color="plum" bg="champagne">
		Red box
		</BigBox>
	);

};

export default Box;
