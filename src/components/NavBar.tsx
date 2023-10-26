import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwich from "./ColorModeSwich";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image alt="logo" src={logo} boxSize={"60px"} />
      <ColorModeSwich />
    </HStack>
  );
};

export default NavBar;
