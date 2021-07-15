import React, {FunctionComponent} from "react";

type FooterProps = {
	message: string;
};

const Footer: FunctionComponent<FooterProps> = ({message}) => {
	return <div>{message}</div>;
};

export default Footer;
