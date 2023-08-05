import { HStack, VStack, Image, Link as CLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <VStack padding="5px" align={"start"}>
      <HStack padding="10px" width="100%">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
      <CLink href="https://github.com/bytecodeman/game-hub" target="_blank">
        Source Code
      </CLink>
    </VStack>
  );
};

export default NavBar;
