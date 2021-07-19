import React, {FunctionComponent} from "react";
import Container from "./Container";
import styled from "styled-components";

export interface HeaderProps {
	message: string;
}

const Header: FunctionComponent<HeaderProps> = ({message}) => {
	return <header>{message}</header>;
};

export default Header;
