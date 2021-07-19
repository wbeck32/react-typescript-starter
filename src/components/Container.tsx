import React, {FunctionComponent} from "react";

export interface ContainerProps {
	message:string;
	text:string;
}

const Container: FunctionComponent<ContainerProps> = ({text, message}) => {
	return (
		<div text="prop" message="message">
			{text}{message}
			-----
		</div>
	);
};

export default Container;
