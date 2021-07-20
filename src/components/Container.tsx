import React, {FunctionComponent} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export interface ContainerProps {
	textString:string;
	message:string
}

const Container:FunctionComponent<ContainerProps> = () => {
	return (
		<div>
			-----


			<Header textString="headerText" message="lookAtMyHeader!"/>
			-----

			<Main textString="mainText" message="lookAtMyMain!"/>
			-----

			<Footer textString="footerText" message="lookAtMyFooter!"/>
			-----
		</div>
	);
};

export default Container;
