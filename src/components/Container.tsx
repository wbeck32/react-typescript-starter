import React, {FunctionComponent} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import {color} from "styled-system";

type ContainerProps = {
	title: string;
};

const Title = styled.h1`
${color}
font-size: 1.5em;
text-align: center;
`;

const Container: FunctionComponent<ContainerProps> = ({title}) => {
	return (
		<div>
			<Header message={title} />
			<Title color="darkMagenta">You call this a title?</Title>
			<Main />
			<Footer message="I am the footer" />
		</div>
	);
};

export default Container;
