import React, {FunctionComponent} from "react";

type MainProps = {
	message:string;
	textString:string
}

const Main: FunctionComponent<MainProps> = ({message, textString}) => {

	return (
		<div>
			{message} {textString}

		</div>
	);
};

export default Main;
