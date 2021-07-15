import React, {FunctionComponent} from "react";
import Header from "./Header";

type ContainerProps = {
	title: string;
};

const Container: FunctionComponent<ContainerProps> = ({title}) => {
	return (
		<div>
			<Header message={title} />
		</div>
	);
};

export default Container;
