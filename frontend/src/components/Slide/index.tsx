import { Box, Flex, Text, Link } from '@chakra-ui/react';
// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([Pagination]);

type Images = {
  id: string;
  url: string;
};

interface SlideProps {
  images: Images[];
}

export const Slide = ({ images }: SlideProps) => {
  return (
    <Swiper
      onSwiper={swiper => console.log(swiper)}
      pagination={{
        type: 'fraction'
      }}
      navigation={true}
    >
      {images.map(image => (
        <SwiperSlide key={image.id}>
          <Link>
            <Flex
              backgroundImage={image.url}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              opacity="0.9"
              w="100vw"
              h="350px"
              display="flex"
              align="center"
              align-items="center"
              justify="center"
              direction="column"
            ></Flex>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
