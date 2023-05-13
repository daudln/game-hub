import thumbsUp from '../assets/thumbs-up.png';
import meh from '../assets/meh.webp';
import bullEyes from '../assets/bull-eyes.png';
import { Image, ImageProps } from '@chakra-ui/react';

const Emoji = ({ rating }: { rating: number }) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'Meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'Recomended', boxSize: '25px' },
    5: { src: bullEyes, alt: 'Exceptional', boxSize: '30px' },
  };

  return <Image {...EmojiMap[rating]} mt={1}></Image>;
};

export default Emoji;