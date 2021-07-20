import React, {FunctionComponent} from "react";

export interface HeaderProps {
	message: string;
	textString:string
}

const Header: FunctionComponent<HeaderProps> = ({textString, message}) => {
	return <header>{message} {textString}</header>;
};

export default Header;
