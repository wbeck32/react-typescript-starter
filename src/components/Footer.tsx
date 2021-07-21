import React, {FunctionComponent} from "react";

export interface FooterProps {
	message: string;
	textString:string
}

const Footer: FunctionComponent<FooterProps> = ({textString, message}) => {
	return <div className="someClass">{message} {textString}</div>;
};

export default Footer;
