import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwich from "./ColorModeSwich";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
      <Image alt="logo" src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwich />
    </HStack>
  );
};

export default NavBar;
