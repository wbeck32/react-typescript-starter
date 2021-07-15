import React, {FunctionComponent} from "react";

type HeaderProps = {
	message: string;
};

const Header: FunctionComponent<HeaderProps> = (props: Record<string, unknown>) => {
	const {message} = props;
	return <header>{message}</header>;
};

export default Header;
