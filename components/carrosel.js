import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image from 'next/image';

const Carousel = () => {
    const imagens = [
        { id: 1, url: '/images/imagem1.jpg' },
        { id: 2, url: '/images/imagem2.jpg' },
        { id: 3, url: '/images/imagem3.jpg' },
      ];
    
      const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <Slider {...config}>
          {imagens.map(imagem => (
            <div key={imagem.id} style={{display:"flex", justifyContent:"center", width:"100%"}}>
              <Image src={imagem.url} alt="ops" width={400} height={200}/>
            </div>
          ))}
        </Slider>
        )
};

export default Carousel;
