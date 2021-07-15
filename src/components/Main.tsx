import React, {FunctionComponent} from "react";

type MainProps = {
	title: string;
};

const Main: FunctionComponent<MainProps> = ({title}) => {
	return <>{title}</>;
};

export default Main;
