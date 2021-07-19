import React, {FunctionComponent} from "react";

type FooterProps = {
	message: string;
	textString:string
};

const Footer: FunctionComponent<FooterProps> = ({textString, message}) => {
	return <div>{message}{textString}</div>;
};

export default Footer;
