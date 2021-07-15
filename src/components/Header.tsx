import React, {FunctionComponent} from "react";

type HeaderProps = {
	message: string;
};

const Header: FunctionComponent<HeaderProps> = ({message}) => {
	return <header>{message}</header>;
};

export default Header;
