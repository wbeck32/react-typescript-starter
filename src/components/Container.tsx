import React, {FunctionComponent} from "react";
import Header from "./Header";
import Main from "./Main";

type ContainerProps = {
	title: string;
};

const Container: FunctionComponent<ContainerProps> = ({title}) => {
	return (
		<div>
			<Header message={title} />
			<Main title="main" />
		</div>
	);
};

export default Container;
