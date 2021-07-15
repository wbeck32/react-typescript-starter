import React, {FunctionComponent} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

type ContainerProps = {
	title: string;
};

const Container: FunctionComponent<ContainerProps> = ({title}) => {
	return (
		<div>
			<Header message={title} />
			<Main title="main" />
			<Footer message="I am the footer" />
		</div>
	);
};

export default Container;
