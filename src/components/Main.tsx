import React, {FunctionComponent} from "react";
import Box from "./Box";

type MainProps = {
	message:string;
	textString:string
}

const Main: FunctionComponent<MainProps> = ({message, textString}) => {

	return (
		<div>
			{message} {textString}
			<Box/>
		</div>
	);
};

export default Main;
