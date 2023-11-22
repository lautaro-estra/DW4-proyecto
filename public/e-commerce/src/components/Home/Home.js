import './Home.css';
import React from 'react';
import Carousel from '../Carousel';

const slides = [
  'https://c8.alamy.com/compes/r18a4p/las-ventas-de-navidad-navidad-banner-ofrecen-diseno-de-plantilla-r18a4p.jpg',
  'https://c8.alamy.com/compes/r18a4p/las-ventas-de-navidad-navidad-banner-ofrecen-diseno-de-plantilla-r18a4p.jpg',
  'https://c8.alamy.com/compes/r18a4p/las-ventas-de-navidad-navidad-banner-ofrecen-diseno-de-plantilla-r18a4p.jpg',
  'https://c8.alamy.com/compes/r18a4p/las-ventas-de-navidad-navidad-banner-ofrecen-diseno-de-plantilla-r18a4p.jpg',
];

const Home = () => {
  return (
    <main className='App'>
      <div className='max-w-screen-xl'> {/* Agrega w-4/5 al contenedor para que el Carousel ocupe el 80% del ancho */}
        <Carousel autoSlide={true} autoSlideInterval={1500000}>
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`Slide ${index}`} />
          ))}
        </Carousel>
      </div>
    </main>
  );
};

export default Home;