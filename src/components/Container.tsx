import React, {FunctionComponent} from "react";
import Header from "./Header";

type ContainerProps = {
	title: string;
	message: string;
};

const Container: FunctionComponent<ContainerProps> = (props: Record<string, unknown>) => {
	const {title} = props;
	return (
		<div>
			<Header message={title} />
		</div>
	);
};

export default Container;
