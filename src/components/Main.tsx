import React, {FunctionComponent} from "react";

type MainProps = {
	message:string
}

const Main: FunctionComponent<MainProps> = ({message}) => {

	return (
		<div>
			{message}

		</div>
	);
};

export default Main;
