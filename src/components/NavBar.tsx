import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwich from "./ColorModeSwich";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image alt="logo" src={logo} boxSize={"60px"} />
      <SearchInput/>
      <ColorModeSwich />
    </HStack>
  );
};

export default NavBar;
