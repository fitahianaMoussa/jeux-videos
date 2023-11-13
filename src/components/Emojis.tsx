import { Image, ImageProps } from "@chakra-ui/react";
import bullYes from "../assets/images.png";
import Meh from "../assets/meh.jpeg";
import Thunds from "../assets/thunds.jpeg";

interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh" },
    4: { src: Thunds, alt: "Recommended" },
    5: { src: bullYes, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} boxSize="25px" />;
};

export default Emojis;
